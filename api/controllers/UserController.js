import UserService from '../services/UserService.js'
import UserDto from '../dtos/UserDto.js'
import ApiError from '../exeptions/ApiError.js'

class UserController {
  static async Login1 (req, res, next) {
    try {
      if (req.user) {
        return next(ApiError.BadRequest('Вы авторизованны!',
          [{ value: '', msg: 'authorized', param: '', location: '' }]))
      }
      const { email } = req.body
      const userData = await UserService.Login1(email)
      return res.json(userData)
    } catch (e) {
      return next(e)
    }
  }

  static async Login2 (req, res, next) {
    try {
      if (req.user) {
        return next(ApiError.BadRequest('Вы авторизованны!',
          [{ value: '', msg: 'authorized', param: '', location: '' }]))
      }
      const { email, code } = req.body
      const userData = await UserService.Login2(email, Number(code))
      res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
      res.cookie('accessToken', userData.AccessToken, { maxAge: 30 * 60 * 1000, httpOnly: false })
      return res.json(userData)
    } catch (e) {
      return next(e)
    }
  }

  static async Activate (req, res, next) {
    try {
      const userData = await UserService.Activate(req.params.code)
      res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
      res.cookie('accessToken', userData.AccessToken, { maxAge: 30 * 60 * 1000, httpOnly: false })
      return res.json(userData)
    } catch (e) {
      return next(e)
    }
  }

  static async Logout (req, res, next) {
    try {
      if (!req.cookies.refreshToken) { return next(ApiError.Unauthorized()) }
      const refreshToken = req.cookies.refreshToken
      await UserService.Logout(refreshToken, req.user)
      res.clearCookie('refreshToken')
      res.clearCookie('accessToken')
      return res.status(200).json({ message: 'Вы больше не авторизованны' })
    } catch (e) {
      return next(e)
    }
  }

  static async Refresh (req, res, next) {
    try {
      if (!req.cookies.refreshToken) { return next(ApiError.Unauthorized()) }
      const refreshToken = req.cookies.refreshToken
      const userData = await UserService.Refresh(refreshToken)
      res.cookie('refreshToken', userData.RefreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
      res.cookie('accessToken', userData.AccessToken, { maxAge: 30 * 60 * 1000, httpOnly: false })
      return res.json(userData)
    } catch (e) {
      return next(e)
    }
  }

  static async GetAuthUser (req, res, next) {
    try {
      return res.json(await new UserDto(await UserService.GetById(req.user.id)))
    } catch (e) {
      return next(e)
    }
  }
}
export default UserController
