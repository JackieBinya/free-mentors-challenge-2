/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';
import app from '../app';
import User from '../models/User';
import data from './MockData/user';
import '../../../../env';
import generateToken from '../utils/authService';
import Session from '../models/Session';

chai.use(chaiHttp);
const { expect, request } = chai;

describe('POST /api/v1/sessions', () => {
  beforeEach(() => {
    User.remove();
    Session.remove();
  });

  let session = {};

  let token = '';

  const exec = () => request(app)
    .post('/api/v1/sessions')
    .send(session)
    .set('x-auth-token', token);

  it('should not create a session if mentor is not provided or is invalid', async () => {
    const user = User.create({ ...data.user00 });
    token = generateToken(user.id);
    session = data.session00;
    const res = await exec();
    expect(res).to.have.status(403);
  });

  it('should create a mentorship session request if all detail is provided', async () => {
    const user = User.create({ ...data.user00 });
    token = generateToken(user.id);

    const mentor = User.create({ ...data.user18 });
    token = generateToken(mentor.id);
    User.changeRole(mentor.id);

    session = data.session00;
    session.mentorId = mentor.id;

    const res = await exec();
    expect(res).to.have.status(200);
  });
});
