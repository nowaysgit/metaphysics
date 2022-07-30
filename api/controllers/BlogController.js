import 'dotenv/config'
import sharp from 'sharp'
import { v4 as uuid } from 'uuid'
import convert from 'heic-convert'
import { Op } from 'sequelize'
import Post from '../models/Post.js'
import Product from '../models/Product.js'
import ApiError from '../exeptions/ApiError.js'

class BlogController {
  static async Add (req, res, next) {
    try {
      const { title, text } = req.body
      if (!req.user.admin) {
        return next(ApiError.Forbidden('Недостаточно прав',
          [{ value: '', msg: 'forbidden', param: '', location: '' }]))
      }
      const photo = req.files.file[0]
      let photoName = uuid()
      photoName = photoName + '.jpeg'
      const outputPath = process.env.PATH_DIR + '/static' + '/img' + '/blog'

      let avatarBuffer = photo.buffer
      try {
        avatarBuffer = await convert({
          buffer: avatarBuffer,
          format: 'JPEG',
          quality: 11
        })
      } catch (e) { }

      await sharp(avatarBuffer).resize(1000, 1000)
        .toFormat('jpeg', { mozjpeg: true })
        .toFile(outputPath + '/' + photoName)

      const post = await Post.create({
        title,
        text,
        photo: photoName,
        date: Date.now()
      })
      return res.json(post)
    } catch (e) {
      return next(e)
    }
  }

  static async Save (req, res, next) {
    try {
      const { id, title, text } = req.body
      if (!req.user.admin) {
        return next(ApiError.Forbidden('Недостаточно прав',
          [{ value: '', msg: 'forbidden', param: '', location: '' }]))
      }
      const post = await Post.findOne({ where: { id } })
      let photoName = post.photo === undefined || post.photo === null || post.photo === '' ? uuid() : String(post.photo).slice(0, -5)
      if (req?.files?.file) {
        console.log(photoName)
        const photo = req?.files?.file[0]
        photoName = photoName + '.jpeg'
        const outputPath = process.env.PATH_DIR + '/static' + '/img' + '/blog'

        let avatarBuffer = photo.buffer
        try {
          avatarBuffer = await convert({
            buffer: avatarBuffer,
            format: 'JPEG',
            quality: 11
          })
        } catch (e) { }

        await sharp(avatarBuffer).resize(1000, 1000)
          .toFormat('jpeg', { mozjpeg: true })
          .toFile(outputPath + '/' + photoName)
      }

      post.text = text
      post.title = title
      post.photo = photoName
      post.save()
      return res.json(post)
    } catch (e) {
      return next(e)
    }
  }

  static async SaveTariffs (req, res, next) {
    try {
      const { tariffs } = req.body
      if (!req.user.admin) {
        return next(ApiError.Forbidden('Недостаточно прав',
          [{ value: '', msg: 'forbidden', param: '', location: '' }]))
      }
      for (const tariff of tariffs) {
        const product = await Product.findOne({ where: { id: tariff.id } })
        if (product) {
          product.name = tariff.name
          product.description = tariff.description
          product.duration = tariff.duration
          product.price = tariff.price
          await product.save()
        }
      }
      return res.json('OK')
    } catch (e) {
      return next(e)
    }
  }

  static async GetAll (req, res, next) {
    try {
      let { page, count, excluding } = req.query
      if (!count) { count = 5 }
      if (!page) { page = 1 }
      if (!excluding) { excluding = -1 }
      const order = await Post.findAll({
        attributes: ['id', 'title', 'photo', 'text', 'date'],
        where: {
          id: {
            [Op.ne]: Number(excluding)
          }
        },
        offset: (page > 1 ? page - 1 : 0) * count,
        limit: count,
        order: [['id', 'ASC']]
      })
      return res.json(order)
    } catch (e) {
      return next(e)
    }
  }

  static async GetById (req, res, next) {
    try {
      const { id } = req.params
      const order = await Post.findOne({ where: { id } })
      return res.json(order)
    } catch (e) {
      return next(e)
    }
  }
}
export default BlogController
