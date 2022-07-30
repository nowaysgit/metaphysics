import { check } from 'express-validator'
import validator from 'validator'

const UserValidator1 = [
  check('email')
    .notEmpty().withMessage('cannot be empty')
    .isLength({ min: 3, max: 30 }).withMessage('min 3 max 30')
    .custom((value) => {
      if (!validator.isEmail(value)) {
        throw new Error('format invalid, must be email')
      }
      return true
    })
]

const UserValidator2 = [
  check('email')
    .notEmpty().withMessage('cannot be empty')
    .isLength({ min: 3, max: 30 }).withMessage('min 3 max 30')
    .custom((value) => {
      if (!validator.isEmail(value)) {
        throw new Error('format invalid, must be email')
      }
      return true
    }),

  check('code')
    .notEmpty().withMessage('cannot be empty')
    .isLength({ min: 5, max: 5 }).withMessage('must be 5')
]

export { UserValidator1, UserValidator2 }
