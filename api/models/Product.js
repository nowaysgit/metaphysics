import { DataTypes } from 'sequelize'
import db from '../db.js'

const Product = db.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  duration: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER }
}, { timestamps: false })

export default Product
