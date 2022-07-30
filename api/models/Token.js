import { DataTypes } from 'sequelize'
import db from '../db.js'

const Token = db.define('token', {
  refreshToken: { type: DataTypes.STRING(300) }
}, { timestamps: false })

export default Token
