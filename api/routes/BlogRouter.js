import express from 'express'
import multer from 'multer'
import controller from '../controllers/BlogController.js'
import AuthMiddleware from '../middleware/AuthMiddleware.js'
const router = express.Router()
const upload = multer()

router.get('/get/:id', controller.GetById)
router.get('/getAll', controller.GetAll)
router.post('/add', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'id', maxCount: 1 }]), AuthMiddleware, controller.Add)
router.post('/save', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'id', maxCount: 1 }]), AuthMiddleware, controller.Save)
router.post('/saveTariffs', AuthMiddleware, controller.SaveTariffs)

export default router
