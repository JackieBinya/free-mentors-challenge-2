import bcrypt from 'bcryptjs';
import '../../../../env';
import User from '../models/User';

const createAdmin = (req, res, next) => {
  const user = User.findAdmin();
  // salt and hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);
  if (!user) {
    User.createAdmin({
      firstName: 'admin',
      lastName: 'admin',
      email: process.env.ADMIN_EMAIL,
      password: hash,
      address: '',
      occupation: '',
      bio: '',
      expertise: '',
    });
  }
  next();
};

export default createAdmin;
