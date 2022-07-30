import { Router } from 'express'
import userRouter from './UserRouter.js'
import calcRouter from './CalcRouter.js'
// import robokassaRoute from './RobokassaRouter.js'
import yookassaRoute from './YookassaRouter.js'
import ProductRouter from './ProductRouter.js'
import BlogRouter from './BlogRouter.js'

const router = Router()

router.use('/user', userRouter)
router.use('/calc', calcRouter)
// router.use('/robokassa', robokassaRoute)
router.use('/yookassa', yookassaRoute)
router.use('/product', ProductRouter)
router.use('/blog', BlogRouter)
router.use('/*', (req, res) => {
  res.status(404).send('404')
})

export default router
