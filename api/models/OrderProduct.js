import db from '../db.js'

const OrderProduct = db.define('order_product', {
}, { timestamps: false })

export default OrderProduct
