import bcrypt from "bcrypt";
import User from "../models/User.js";
import Token from "../models/Token.js";
import TokenService from "./TokenService.js";
import EmailService from "./EmailService.js";
import ApiError from "../exeptions/ApiError.js";

class UserService {
    static async Registration(id, password) {
        const candidate = await User.findOne({where: {id: id}})
        if (candidate) {
            throw ApiError.BadRequest('Пользователь с таким логином уже существует!',
                [{value: id, msg: 'already exists', param: 'id', location: 'body'}]);
        }
        const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = uuid();
        const user = await User.create({
            id: id,
			activate: false,
            activate_link: activationLink,
            password: hashPassword
        });
		
		await EmailService.SendActivationEmail(email,`${process.env.API_URL}user/activate/${activationLink}`);
		
        return TokenService.MakeNewToken(user);
    }

    static async Login(id, password) {
        const user = await User.findOne({where: {id: id}});
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким логином не найден',
                [{value: id, msg: 'not found', param: 'id', location: 'body'}]);
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual)
        {
            throw ApiError.BadRequest('Введен неверный пароль',
                [{value: password, msg: 'wrong', param: 'password', location: 'body'}]);
        }
        return TokenService.MakeNewToken(user);
    }

    static async Logout(refreshToken, user) {
        const token = await Token.findOne({where: {refreshToken: refreshToken}});
        if (!token) {
            throw ApiError.BadRequest('Вы уже вышли',
                [{value: refreshToken, msg: 'already done', param: 'refreshToken', location: 'cookies'}]);
        }
        return await TokenService.Remove(refreshToken, user);
    }

    static async Refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.Unauthorized();
        }
        const userData = await TokenService.ValidateRefreshToken(refreshToken);
        const tokenData = await TokenService.Find(refreshToken);
        if (!userData || !tokenData) {
            throw ApiError.Unauthorized();
        }
        const user = await User.findOne({where: {id: userData.id}});
        return TokenService.MakeNewToken(user);
    }

    static async GetById(id) {
        if (!id) return null;
        return await User.findOne({where: {id: id}});
    }

}

export default UserService;