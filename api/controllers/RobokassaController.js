import RobokassaService from '../services/RobokassaService.js'
import Order, { OrderStatus } from '../models/Order.js'
import Product from '../models/Product.js'
import User from '../models/User.js'
import ApiError from '../exeptions/ApiError'

class RobokassaController {
  static async Success (req, res, next) {
    try {
      await RobokassaService.helper.handleResultUrlRequest(req, res, async (values, userData) => {
        const result = {
          values, // Will contain general values like "invId" and "outSum"
          userData // Will contain all your custom data passed previously, e.g.: "productId"
        }
        console.log(result)
        const order = await Order.findOne({ where: { id: values.invId } })
        if (!order) {
          return false
        }
        order.status = OrderStatus.Success
        order.save()

        const product = await Product.findOne({ where: { id: userData.productId } })
        const accessDate = new Date(Date.now())
        accessDate.setDate(accessDate.getDate() + product.duration)

        const user = await User.findOne({ where: { email: userData.username } })
        user.access = true
        user.accessDate = accessDate
        user.save()
        return true
      })
      console.log('error')
    } catch (e) {
      return next(e)
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
      return res.json(await RobokassaService.GenerateUrl(order.id, req.user.email, id, product.price, product.description))
    } catch (e) {
      return next(e)
    }
  }
}
export default RobokassaController
