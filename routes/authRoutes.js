import express from 'express';
import { signup, login, googleLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/auth/google', googleLogin);

export default router;
