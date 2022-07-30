import User from './User.js'
import Token from './Token.js'
import Product from './Product.js'
import Order from './Order.js'
import OrderProduct from './OrderProduct.js'

User.hasOne(Token)
Token.belongsTo(User)

Order.belongsToMany(Product, { as: 'product', through: OrderProduct })
Product.belongsToMany(Order, { as: 'order', through: OrderProduct })

User.hasMany(Order)
Order.belongsTo(User)
