import express from 'express'
import CalcController from '../controllers/CalcController.js'
import AuthMiddleware from '../middleware/AuthMiddleware.js'
const router = express.Router()

router.get('/getMain', (req, res, next) => AuthMiddleware(req, res, next, true), CalcController.GetMainCalc)
router.get('/getBazi', CalcController.GetBazi)
router.get('/getGuaPeople', CalcController.GetGuaPeople)
router.get('/getGuaHouse', CalcController.GetGuaHouse)
router.get('/getRuler', CalcController.GetRuler)

export default router
