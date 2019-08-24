import User from '../models/User';
import Session from '../models/Session';

const createSession = (req, res) => {
  const menteeId = req.decoded.payload;
  const { mentorId, questions } = req.body;
  const { id: sessionId, status, menteeEmail } = Session.create({ mentorId, questions, menteeId });
  res.status(200).json({
    status: 200,
    data: {
      sessionId,
      mentorId,
      menteeId,
      questions,
      menteeEmail,
      status,
    },
  });
};

export { createSession };
