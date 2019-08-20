/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';
import app from '../app';
import User from '../models/User';
import data from './MockData/user';

chai.use(chaiHttp);
const { expect, request } = chai;

describe('POST /api/v1/auth/signup', () => {
  beforeEach(() => {
    User.remove();
  });

  let user = {};

  const exec = () => request(app)
    .post('/api/v1/auth/signup')
    .send(user);

  it('should not sign up a user if firstname field is not filled', async () => {
    user = { ...data.user01 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if lastname field is not filled', async () => {
    user = { ...data.user02 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if email field is not filled', async () => {
    user = { ...data.user03 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should authenticate a user when provided with the required details', async () => {
    user = { ...data.user00 };
    const res = await exec();
    expect(res).to.have.status(201);
  });

  it('should not sign up a user if password is invalid', async () => {
    user = { ...data.user04 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if address is invalid', async () => {
    user = { ...data.user05 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if occupation is invalid', async () => {
    user = { ...data.user06 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if bio is invalid', async () => {
    user = { ...data.user07 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign up a user if expertise is invalid', async () => {
    user = { ...data.user08 };
    const res = await exec();
    expect(res).to.have.status(400);
  });

  it('should not sign  up a user who is already registered', async () => {
    const user1 = User.create({ ...data.user00 });

    user = { ...data.user00 };
    const res = await exec();
    expect(res).to.have.status(400);
  });
});
