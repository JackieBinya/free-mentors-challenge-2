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
      role: 'user',
      id: uuid.v4(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  remove() {
    this.users = [];
  }
}

export default new User();
