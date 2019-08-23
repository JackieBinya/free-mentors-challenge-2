import { Router } from 'express';
import { verifyAuthUser } from '../middleware/verify';
import { viewMentors } from '../controllers/mentorController';

const router = Router();

router.use(verifyAuthUser);

router.get('/', viewMentors);

export default router;
