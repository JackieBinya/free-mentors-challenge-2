import { Router } from 'express';
import { signUpValidator } from '../middleware/inputValidators';
import { createNewUser } from '../controllers/user';
import { verifyNewUser } from '../middleware/verify';

const router = Router();

router.post('/auth/signup', signUpValidator, verifyNewUser, createNewUser);

export default router;
