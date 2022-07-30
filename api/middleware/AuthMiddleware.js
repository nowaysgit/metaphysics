import ApiError from '../exeptions/ApiError.js'
import TokenService from '../services/TokenService.js'

async function AuthMiddleware (req, res, next, isTry = false) {
  try {
    const accessToken = req.cookies.accessToken
    if (!accessToken && !isTry) {
      return next(ApiError.Unauthorized())
    }
    const userData = TokenService.ValidateAccessToken(accessToken)
    await userData.then((value) => {
      if (!value && !isTry) {
        return next(ApiError.Unauthorized())
      } else if (value) {
        req.user = { email: value.email, admin: value.admin }
      }
    })
    return next()
  } catch (e) {
    return next(ApiError.Unauthorized())
  }
}

export default AuthMiddleware
