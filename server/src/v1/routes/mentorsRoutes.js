import { Router } from 'express';
import { verifyAuthUser } from '../middleware/verify';
import { viewMentors, viewSpecificMentor } from '../controllers/mentorController';

const router = Router();

router.use(verifyAuthUser);

router.get('/', viewMentors);
router.get('/:mentorId', viewSpecificMentor);

export default router;
