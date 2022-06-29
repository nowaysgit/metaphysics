import User from "./User.js";
import Token from "./Token.js";

User.hasOne(Token);
Token.belongsTo(User);