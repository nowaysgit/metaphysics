import { check } from "express-validator";

const FileValidator = [
    check('files')
        .custom((value, {req}) => {
            if(!req.files || !req.files.files) throw new Error('none files (add files with key files)');
            return true;
        }),
]

const GetListValidator = [
    check('page')
        .optional({nullable: false})
        .isInt({ min: 1 }).withMessage("format invalid"),

    check('list_size')
        .optional({nullable: false})
        .isInt({ min: 1 }).withMessage("format invalid")
]

export { FileValidator, GetListValidator };