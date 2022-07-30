import express from 'express'
import RobokassaController from '../controllers/RobokassaController.js'
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = express.Router()

router.get('/getUrl/:id', (req, res, next) => AuthMiddleware(req, res, next, true), RobokassaController.GetUrl)
router.post('/success', RobokassaController.Success)

export default router
