import YookassaService from '../services/YookassaService.js'
import Order, { OrderStatus } from '../models/Order.js'
import Product from '../models/Product.js'
import User from '../models/User.js'
import ApiError from '../exeptions/ApiError'

class YookassaController {
  static async Success (req, res, next) {
    try {
      const data = req.body.object
      console.log(data)
      if (!data.paid) {
        return res.status(200).json('OK')
      }
      const order = await Order.findOne({ where: { id: Number(data.metadata.orderId) } })
      if (!order) {
        return res.status(200).json('OK')
      }
      order.status = OrderStatus.Success
      order.save()

      const product = await Product.findOne({ where: { id: Number(data.metadata.productId) } })
      const accessDate = new Date(Date.now())
      accessDate.setDate(accessDate.getDate() + product.duration)

      const user = await User.findOne({ where: { email: data.merchant_customer_id } })
      user.access = true
      user.accessDate = accessDate
      user.save()
      return res.status(200).json('OK')
    } catch (e) {
      return res.status(200).json('OK')
      // return next(e)
    }
  }

  static async GetUrl (req, res, next) {
    try {
      if (!req.user || !req.user.email) {
        return next(ApiError.Unauthorized())
      }
      const { id } = req.params
      const product = await Product.findOne({ where: { id } })
      if (!product) {
        return next(ApiError.BadRequest('Данный продукт не найден',
          [{ value: id, msg: 'not found', param: 'id', location: 'query' }]))
      }
      const order = await Order.create({
        status: OrderStatus.Await,
        userEmail: req.user.email
      })
      await order.addProduct(product)
      return res.json(await YookassaService.CreatePayment(order.id, req.user.email, id, product.price, product.description, product.duration))
    } catch (e) {
      return next(e)
    }
  }
}
export default YookassaController
