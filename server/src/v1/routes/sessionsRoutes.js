import { Router } from 'express';
import {
  verifyAuthUser, checkMentor, verifyMentor, verifySession,
} from '../middleware/verify';
import { createSession, declineRequest, acceptRequest } from '../controllers/sessionsController';

const router = Router();

router.use(verifyAuthUser);

router.post('/', checkMentor, createSession);
router.patch('/:sessionId/accept', verifyMentor, verifySession, acceptRequest);
router.patch('/:sessionId/reject', verifyMentor, verifySession, declineRequest);

export default router;
