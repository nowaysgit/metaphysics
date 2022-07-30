import { DataTypes } from 'sequelize'
import db from '../db.js'

const Post = db.define('post', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  photo: { type: DataTypes.STRING },
  text: { type: DataTypes.STRING(2000) },
  date: { type: DataTypes.DATE }
}, { timestamps: false })

export default Post
