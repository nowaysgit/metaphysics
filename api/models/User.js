import { DataTypes } from 'sequelize'
import db from '../db.js'

const User = db.define('user', {
  email: { type: DataTypes.STRING, primaryKey: true },
  access: { type: DataTypes.BOOLEAN, default: false },
  accessDate: { type: DataTypes.DATE },
  code: { type: DataTypes.INTEGER },
  admin: { type: DataTypes.BOOLEAN, default: false },
  codeDate: { type: DataTypes.DATE }
}, { timestamps: false })

export default User
