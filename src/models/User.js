import db from "../db.js";
import { DataTypes } from "sequelize";

const User = db.define('user', {
    id: {type:DataTypes.STRING, primaryKey: true},
	email: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
}, {timestamps: false});

export default User;