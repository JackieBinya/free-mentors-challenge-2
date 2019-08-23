/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';
import app from '../app';
import User from '../models/User';
import data from './MockData/user';
import '../../../../env';
import generateToken from '../utils/authService';

chai.use(chaiHttp);
const { expect, request } = chai;

describe('GET /api/v1/mentor', () => {
  beforeEach(() => {
    User.remove();
  });

  let token = '';

  const exec = () => request(app)
    .get('/api/v1/mentor')
    .set('x-auth-token', token);

  it('should not get mentors if the user has no token', async () => {
    token = '';
    const res = await exec();
    expect(res).to.have.status(401);
  });

  it('should not get mentors if the user has an invalid token', async () => {
    token = 'code';
    const res = await exec();
    expect(res).to.have.status(401);
  });

  it('should notify a user if there are no mentors registered in the app', async () => {
    const user = User.create({ ...data.user00 });
    token = generateToken(user.id);
    const res = await exec();
    expect(res).to.have.status(404);
  });

  it('should get mentors in the app if the user is authenticated', async () => {
    const user = User.create({ ...data.user00 });
    token = generateToken(user.id);
    User.changeRole(user.id);

    const res = await exec();
    expect(res).to.have.status(200);
  });
});
