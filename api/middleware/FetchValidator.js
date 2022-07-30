import { validationResult } from 'express-validator'
import ApiError from '../exeptions/ApiError.js'

const FetchValidator = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Ошибка при валидации!', errors.array()))
  }
  next()
}

export default FetchValidator
