import UserService from "../services/UserService.js";
import UserDto from "../dtos/UserDto.js";
import ApiError from "../exeptions/ApiError.js";
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UserController {

    static async MainPage(req, res, next) {
        try {
			res.status(200).sendFile(path.join(__dirname, '../../public/mainCalc.html'));
        } catch (e) {
            return next(e)
        }
    }
}
export default UserController;