import { Router } from 'express';
import { verifyAuthUser, checkMentor } from '../middleware/verify';
import { createSession } from '../controllers/sessionsController';

const router = Router();

router.use(verifyAuthUser);

router.post('/', checkMentor, createSession);

export default router;
