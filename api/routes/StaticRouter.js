import express from 'express';
import StaticController from "../controllers/StaticController.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
const router = express.Router();

router.get('/', (req, res, next) => AuthMiddleware(req, res, next, true), StaticController.MainPage);

export default router;
