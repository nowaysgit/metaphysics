import db from "../db.js";
import { DataTypes } from "sequelize";

const Token = db.define('token', {
    refreshToken: {type:DataTypes.STRING(300)}
}, {timestamps: false})

export default Token;