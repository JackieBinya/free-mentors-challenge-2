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

const authUser = async (req, res) => {
  const user = await User.findByEmail(req.body.email.trim());

  bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
    // res === true
    if (err) throw err;
    if (isMatch) {
      return res.status(200).json({
        status: 200,
        message: 'User is successfully logged in',
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
    }

    if (!isMatch) {
      return res.status(400).json({
        status: 400,
        error: 'Authentification failed incorrect password!',
      });
    }
  });
};

export { createNewUser, authUser };
