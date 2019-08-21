import { emailRE, passwordRE, nameRE } from '../utils/regex';

const signUpValidator = (req, res, next) => {
  const {
    firstName, lastName, email, password, address, occupation, bio, expertise,
  } = req.body;
  // Validate all user input
  if (!firstName || firstName.trim() === '' || !nameRE.test(firstName)) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid first name.',
    });
  }

  if (!lastName || lastName.trim() === '' || !nameRE.test(lastName)) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid last name.',
    });
  }

  if (!email || email.trim() === '' || !emailRE.test(email)) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid email.',
    });
  }

  if (!password || password.trim() === '' || !passwordRE.test(password)) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid password, which should contain letters and numbers and have a minimum of 6 characters.',
    });
  }

  if (!address || address.trim() === '') {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid address.',
    });
  }

  if (!occupation || occupation.trim() === '' || occupation.trim().length > 100) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid occupation which should be no more than 100 characters long.',
    });
  }

  if (!bio || bio.trim() === '' || bio.trim().length < 30 || bio.trim().length > 800) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid bio, which should be no less than 30 characters long and no more than 800 characters long.',
    });
  }

  if (!expertise || expertise.trim() === '' || expertise.trim().length < 30 || expertise.trim().length > 200) {
    return res.status(400).json({
      status: 400,
      error: 'Please enter a valid area of expertise, which should be no less than 30 characters long and no more than 200 characters long.',
    });
  }

  next();
};

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || email.trim() === '') {
    return res.status(400).json({
      status: 400,
      error: 'Please enter your email, to continue.',
    });
  }

  if (!password || password.trim() === '') {
    return res.status(400).json({
      status: 400,
      error: 'Please enter your password, to continue.',
    });
  }
  next();
};

export { signUpValidator, loginValidator };
