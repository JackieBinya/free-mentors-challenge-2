import uuid from 'uuid';
import User from './User';

class Session {
  constructor() {
    this.sessions = [];
  }

  create(data) {
    const { mentorId, menteeId, questions } = data;
    const { email: menteeEmail } = User.findOne(menteeId);
    const newSession = {
      id: uuid.v4(),
      mentorId,
      menteeId,
      questions,
      menteeEmail,
      status: 'Pending',
    };
    this.sessions.push(newSession);
    return newSession;
  }

  remove() {
    this.sessions = [];
  }
}

export default new Session();
