import UserService from "../services/UserService.js";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exeptions/ApiError.js";

class UserController {

    static async Registration(req, res, next) {
        try {
            if(req.user) return next(ApiError.BadRequest('Вы авторизованны!',
                [{value: '', msg: 'authorized', param: '', location: ''}]));
            const { id, password } = req.body;
            const userData = await UserService.Registration(id, password);
            res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            return next(e)
        }
    }
	
	static async Activate(link) {
		try {
			const user = await User.findOne({where: {activate_link: link}});
			if (!user) {
				return next(ApiError.BadRequest('Некорректная ссылка на активацию!'));
			}
			user.activate = true;
        await user.save();
		} catch (e) {
            return next(e)
        }
    }

    static async Login(req, res, next) {
        try {
            const { id, password } = req.body;
            const userData = await UserService.Login(id, password);
            res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            return next(e)
        }
    }

    static async Logout(req, res, next) {
        try {
            if (!req.cookies['refreshToken']) return next(ApiError.Unauthorized());
            const refreshToken = req.cookies['refreshToken'];
            await UserService.Logout(refreshToken, req.user);
            res.clearCookie('refreshToken');
            return res.status(200).json({message: 'Вы больше не авторизованны'});
        } catch (e) {
            return next(e)
        }
    }

    static async Refresh(req, res, next) {
        try {
            if (!req.cookies['refreshToken']) return next(ApiError.Unauthorized());
            const refreshToken = req.cookies['refreshToken'];
            const userData = await UserService.Refresh(refreshToken);
            res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            return next(e);
        }
    }

    static async GetAuthUser(req, res, next) {
        try {
            return res.json(await new UserDto(await UserService.GetById(req.user.id)));
        } catch (e) {
            return next(e);
        }
    }
}
export default UserController;