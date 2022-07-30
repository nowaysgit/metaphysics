import { DataTypes } from 'sequelize'
import db from '../db.js'

export const OrderStatus = {
  Await: 'await',
  Success: 'success',
  Cancel: 'cancel'
}
const Order = db.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.ENUM('await', 'success', 'cancel') }
}, { timestamps: true })

export default Order
