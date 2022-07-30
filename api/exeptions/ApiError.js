class ApiError extends Error {
  success
  status
  message
  errors

  constructor (status, message, errors) {
    super()
    this.success = false
    this.status = status
    this.message = message
    this.errors = errors
  }

  static BadRequest (message, errors) {
    return new ApiError(400, message, errors)
  }

  static Internal (message) {
    return new ApiError(500, message)
  }

  static Unauthorized () {
    return new ApiError(401, 'Пользователь не авторизован!')
  }

  static Forbidden (message) {
    return new ApiError(403, message)
  }
}

export default ApiError
