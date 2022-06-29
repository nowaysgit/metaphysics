import express from 'express';
import UserController from "../controllers/UserController.js";
import fetchValidator from "../middleware/fetchValidator.js";
import userValidator from "../validators/UserValidator.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
const router = express.Router();

router.post('/signin', userValidator, fetchValidator, UserController.Login);
router.post('/signup', (req, res, next) => AuthMiddleware(req, res, next, true), userValidator, fetchValidator, UserController.Registration);
router.post('/signin/new_token', AuthMiddleware, UserController.Refresh);
router.get('/logout', AuthMiddleware, UserController.Logout);
router.get('/info', AuthMiddleware, UserController.GetAuthUser);
router.get('/activate/:link', UserController.Activate)

export default router;
