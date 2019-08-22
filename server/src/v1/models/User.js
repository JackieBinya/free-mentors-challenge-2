import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  create(data) {
    const {
      firstName, lastName, email, address, password, occupation, bio, expertise,
    } = data;
    const newUser = {
      firstName,
      lastName,
      email,
      address,
      password,
      occupation,
      bio,
      expertise,
      imageUrl: '',
      isAdmin: 'false',
      role: 'user',
      id: uuid.v4(),
    };
    this.users.push(newUser);
    return newUser;
  }

  createAdmin(data) {
    const {
      firstName, lastName, email, address, password, occupation, bio, expertise,
    } = data;
    const newUser = {
      firstName,
      lastName,
      email,
      address,
      password,
      occupation,
      bio,
      expertise,
      imageUrl: '',
      isAdmin: 'true',
      role: '',
      id: uuid.v4(),
    };
    this.users.push(newUser);
    return newUser;
  }


  findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  findAdmin() {
    return this.users.find(user => user.isAdmin === 'true');
  }

  remove() {
    this.users = [];
  }
}

export default new User();
