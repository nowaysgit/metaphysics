import ApiError from '../exeptions/ApiError.js'
import Product from '../models/Product.js'

class ProductController {
  static async GetAll (req, res, next) {
    try {
      const products = await Product.findAll()
      if (!products) {
        return next(ApiError.Forbidden('Продуктов нет!',
          [{ value: '', msg: 'not fund', param: 'getAll', location: 'query' }]))
      }
      return res.json(products)
    } catch (e) {
      return next(e)
    }
  }
}
export default ProductController
