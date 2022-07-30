import User from '../models/User.js'
import Token from '../models/Token.js'
import ApiError from '../exeptions/ApiError.js'
import UserDto from '../dtos/UserDto.js'
import TokenService from './TokenService.js'
import EmailService from './EmailService.js'

class UserService {
  static async Login1 (email) {
    const candidate = await User.findOne({ where: { email } })
    let code = Math.floor(Math.random() * 90000) + 10000
    while (true) {
      const userWithCode = await User.findOne({ where: { code } })
      if (!userWithCode) { break }
      code = Math.floor(Math.random() * 90000) + 10000
    }
    if (!candidate) {
      const user = await User.create({
        email,
        code,
        codeDate: Date.now()
      })
      await EmailService.SendActivationEmail(email, `${process.env.API_URL}user/activate/${code}`)

      return new UserDto(user)
    } else {
      candidate.code = code
      candidate.save()
      await EmailService.SendActivationEmail(email, `${process.env.API_URL}user/activate/${code}`)

      return new UserDto(candidate)
    }
  }

  static async Login2 (email, code) {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким логином не найден, СООБЩИТЕ АДМИНИСТРАТОРУ!',
        [{ value: email, msg: 'not found', param: 'email', location: 'body' }])
    }
    if (user.code !== code) {
      throw ApiError.BadRequest('Вы ввели неверный код!',
        [{ value: email, msg: 'invalid', param: 'code', location: 'body' }])
    }
    return TokenService.MakeNewToken(user)
  }

  static async Activate (code) {
    const user = await User.findOne({ where: { code } })
    if (!user) {
      throw ApiError.BadRequest('Неверная ссылка на вход!',
        [{ value: code, msg: 'not found', param: 'code', location: 'query' }])
    }
    return TokenService.MakeNewToken(user)
  }

  static async Logout (refreshToken, user) {
    const token = await Token.findOne({ where: { refreshToken } })
    if (!token) {
      throw ApiError.BadRequest('Вы уже вышли',
        [{ value: refreshToken, msg: 'already done', param: 'refreshToken', location: 'cookies' }])
    }
    return await TokenService.Remove(refreshToken, user)
  }

  static async Refresh (refreshToken) {
    if (!refreshToken) {
      throw ApiError.Unauthorized()
    }
    const userData = await TokenService.ValidateRefreshToken(refreshToken)
    const tokenData = await TokenService.Find(refreshToken)
    if (!userData || !tokenData) {
      throw ApiError.Unauthorized()
    }
    const user = await User.findOne({ where: { email: userData.email } })
    return TokenService.MakeNewToken(user)
  }

  static async GetByEmail (email) {
    if (!email) { return null }
    return await User.findOne({ where: { email } })
  }
}

export default UserService
