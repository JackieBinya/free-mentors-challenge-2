import { Router } from 'express';
import { changeRole } from '../controllers/userController';
import { verifyAuthUser, checkUser, verifyAdmin } from '../middleware/verify';

const router = Router();

router.patch('/:userId', verifyAuthUser, verifyAdmin, checkUser, changeRole);

export default router;
