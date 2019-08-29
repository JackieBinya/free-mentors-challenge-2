/* eslint-disable consistent-return */
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

const declineRequest = (req, res) => {
  const { sessionId } = req.params;
  const {
    mentorId, menteeId, questions, menteeEmail, status,
  } = Session.decline(sessionId);
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

const acceptRequest = (req, res) => {
  const { sessionId } = req.params;
  const {
    mentorId, menteeId, questions, menteeEmail, status,
  } = Session.accept(sessionId);
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

const fetchSessions = (req, res) => {
  const userId = req.decoded.payload;
  const user = User.findOne(userId);

  if (user.role === 'user') {
    const sessions = Session.findMenteeSessions(userId);
    if (sessions.length) {
      return res.status(200).json({
        status: 200,
        data: sessions,
      });
    }

    res.status(404).json({
      status: 404,
      error: 'Sessions not found',
    });
  }

  if (user.role === 'mentor') {
    const sessions = Session.findMentorSessions(userId);
    if (sessions.length) {
      return res.status(200).json({
        status: 200,
        data: sessions,
      });
    }

    return res.status(404).json({
      status: 404,
      error: 'Sessions not found',
    });
  }
};

export {
  createSession, declineRequest, acceptRequest, fetchSessions,
};
