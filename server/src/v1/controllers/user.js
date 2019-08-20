import bcrypt from 'bcryptjs';
import generateToken from '../utils/authService';
import User from '../models/User';

const createNewUser = (req, res) => {
  const {
    firstName, lastName, email, password, address, occupation, bio, expertise,
  } = req.body;
    // salt and hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password.trim(), salt);

  const user = User.create({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    password: hash,
    address: address.trim(),
    occupation: occupation.trim(),
    bio: bio.trim(),
    expertise: expertise.trim(),
  });

  return res.status(201).json({
    status: 201,
    message: 'User created successfully',
    data: {
      token: generateToken(user.id),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      occupation: user.occupation,
      bio: user.bio,
      expertise: user.expertise,
      imageUrl: user.imageUrl,
      role: user.role,
      id: user.id,
    },
  });
};

export { createNewUser };
