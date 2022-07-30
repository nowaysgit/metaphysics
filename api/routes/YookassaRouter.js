import express from 'express'
import YookassaController from '../controllers/YookassaController.js'
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = express.Router()

router.get('/getUrl/:id', (req, res, next) => AuthMiddleware(req, res, next, true), YookassaController.GetUrl)
router.post('/success', YookassaController.Success)

export default router
