import { Router } from "express";
import staticRoute from "./StaticRouter.js";
import userRoute from "./UserRouter.js";
import calcRoute from "./CalcRouter.js";

const router = Router();

router.use('/api/user', userRoute);
router.use('/api/calc', calcRoute);
router.use('/', staticRoute);
router.use('*', (req, res) => {
  res.status(404).send("404");
});

export default router