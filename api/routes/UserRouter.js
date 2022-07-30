import express from 'express'
import UserController from '../controllers/UserController.js'
import fetchValidator from '../middleware/fetchValidator.js'
import { UserValidator1, UserValidator2 } from '../validators/UserValidator.js'
import AuthMiddleware from '../middleware/AuthMiddleware.js'
const router = express.Router()

router.post('/login1', UserValidator1, fetchValidator, UserController.Login1)
router.post('/login2', UserValidator2, fetchValidator, UserController.Login2)
router.get('/refresh', UserController.Refresh)
router.get('/logout', AuthMiddleware, UserController.Logout)
router.get('/info', AuthMiddleware, UserController.GetAuthUser)
router.get('/activate/:code', UserController.Activate)

export default router
