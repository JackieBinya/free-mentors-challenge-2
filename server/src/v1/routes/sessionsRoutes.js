import { Router } from 'express';
import {
  verifyAuthUser, checkMentor, verifyMentor, verifySession, verifyUser,
} from '../middleware/verify';
import {
  createSession, declineRequest, acceptRequest, fetchSessions,
} from '../controllers/sessionsController';

const router = Router();

router.use(verifyAuthUser);

router.post('/', verifyUser, checkMentor, createSession);
router.patch('/:sessionId/accept', verifyMentor, verifySession, acceptRequest);
router.patch('/:sessionId/reject', verifyMentor, verifySession, declineRequest);
router.get('/', verifyUser, fetchSessions);

export default router;
