import { Router } from 'express';
import { signUpValidator, loginValidator } from '../middleware/inputValidators';
import { createNewUser, authUser } from '../controllers/userController';
import { verifyNewUser, verifyExistingUser } from '../middleware/verify';

const router = Router();

router.post('/signup', signUpValidator, verifyNewUser, createNewUser);
router.post('/signin', loginValidator, verifyExistingUser, authUser);

export default router;
