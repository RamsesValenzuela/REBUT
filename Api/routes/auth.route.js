import {Router} from 'express';
import authController from '../controllers/auth.controller.js';
import validationAuth from '../middlewares/validationAuth.js';
const router = Router();

router.post('/login', validationAuth.validationAuth, authController.login);

export default router;