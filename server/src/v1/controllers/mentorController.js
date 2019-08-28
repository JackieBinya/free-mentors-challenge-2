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

const viewSpecificMentor = (req, res) => {
  const { mentorId: id00 } = req.params;
  const result = User.findOne(id00);

  if (result && result.role === 'mentor') {
    const {
      id: mentorId, firstName, lastName, email, address, occupation, bio, expertise, role, isAdmin,
    } = result;

    return res.status(200).json({
      status: 200,
      data: {
        mentorId,
        firstName,
        lastName,
        email,
        address,
        occupation,
        bio,
        expertise,
        role,
        isAdmin,
      },
    });
  }
  return res.status(404).json({
    status: 404,
    error: 'Mentor not found!',
  });
};


export { viewMentors, viewSpecificMentor };
