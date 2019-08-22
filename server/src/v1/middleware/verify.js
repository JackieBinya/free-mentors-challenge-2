import jwt from 'jsonwebtoken';
import User from '../models/User';

const verifyNewUser = (req, res, next) => {
  const user = User.findByEmail(req.body.email.trim());
  if (user) {
    return res.status(400).json({
      status: 400,
      error: 'Your email is already registered in the app, you are only allowed to have one account.',
    });
  }

  next();
};

const verifyExistingUser = (req, res, next) => {
  const user = User.findByEmail(req.body.email.trim());
  if (!user) {
    return res.status(400).json({
      status: 400,
      error: 'Please sign up to continue, if already signed up the email you provided is incorrect. Please try again.',
    });
  }
  next();
};

export { verifyNewUser, verifyExistingUser };
