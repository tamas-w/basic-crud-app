import { UserRepository } from '../Repositories/UserRepository.js';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(username, password, email) {
    const findUser = await this.userRepository.getUser(email);
    if (findUser.username) {
      throw Error('User with that name already exists!');
    }
    if (findUser.email) {
      throw Error('User with that email already exists!');
    } else {
      const data = await this.userRepository.registerUser(
        username,
        password,
        email
      );
      return data;
    }
  }
}
