import { check } from "express-validator";
import validator from "validator";

const UserValidator = [
    check('id')
        .notEmpty().withMessage('cannot be empty')
        .isLength({ min: 3, max: 30 }).withMessage("min 3 max 30")
        .custom(value => {
            if (!validator.isMobilePhone(value) && !validator.isEmail(value)) {
                throw new Error('format invalid, must be phone or email');
            }
            return true;
        }),

    check('password')
        .notEmpty().withMessage('cannot be empty')
        .isLength({ min: 3, max: 30 }).withMessage("min 3 max 30"),
]

export default UserValidator;