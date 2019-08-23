import bcrypt from 'bcryptjs';
import generateToken from '../utils/authService';
import User from '../models/User';

const viewMentors = (req, res) => {
  const result = User.findMentors();
  const mentors = result.map(({
    id: mentorId, firstName, lastName, email, address, occupation, bio, expertise, role, isAdmin,
  }) => ({
    mentorId, firstName, lastName, email, address, occupation, bio, expertise, role, isAdmin,
  }));

  if (mentors.length) {
    return res.status(200).json({
      status: 200,
      data: mentors,
    });
  }
  return res.status(404).json({
    status: 404,
    error: 'No mentors have been found.',
  });
};

export { viewMentors };
