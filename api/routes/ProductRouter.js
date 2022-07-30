import express from 'express'
import ProductController from '../controllers/ProductController.js'
const router = express.Router()

router.get('/getAll', ProductController.GetAll)

export default router
