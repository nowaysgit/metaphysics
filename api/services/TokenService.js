import jwt from 'jsonwebtoken'
import Token from '../models/Token.js'
import UserDto from '../dtos/UserDto.js'

export class Tokens {
  AccessToken
  RefreshToken

  constructor (accessToken, refreshToken) {
    this.AccessToken = accessToken
    this.RefreshToken = refreshToken
  }
}

class TokenService {
  static async #SaveToken (email, refreshToken) {
    const tokenData = await Token.findOne({ where: { userEmail: email } })
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    return await Token.create({
      userEmail: email,
      refreshToken
    })
  }

  static async #GenerateTokens (payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '10m' })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
    return new Tokens(accessToken, refreshToken)
  }

  static async MakeNewToken (user) {
    const userDto = new UserDto(user)
    const tokenData = await Token.findOne({ where: { userEmail: user.email } })
    const userData = await TokenService.ValidateRefreshToken(tokenData.refreshToken)
    if (!tokenData && !userData) {
      const tokens = await this.#GenerateTokens({ ...userDto })
      await this.#SaveToken(user.email, tokens.RefreshToken)
      return { ...tokens, user: userDto }
    } else {
      const userDto = new UserDto(user)
      const accessToken = jwt.sign({ ...userDto }, process.env.JWT_ACCESS_SECRET, { expiresIn: '10m' })
      return { AccessToken: accessToken, RefreshToken: tokenData.refreshToken, user: userDto }
    }
  }

  static async ValidateAccessToken (token) {
    try {
      return await jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    } catch (e) {
      return null
    }
  }

  static async ValidateRefreshToken (token) {
    try {
      return await jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    } catch (e) {
      return null
    }
  }

  static async Remove (refreshToken, user) {
    await this.MakeNewToken(user)
    return await Token.destroy({ where: { refreshToken } })
  }

  static async Find (refreshToken) {
    return await Token.findOne({ where: { refreshToken } })
  }
}

export default TokenService
