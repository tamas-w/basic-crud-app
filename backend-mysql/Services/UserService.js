import bcrypt from 'bcrypt';
import { UserRepository } from '../Repositories/UserRepository.js';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(username, password, email) {
    const findUser = await this.userRepository.findUser(email);
    if (findUser?.username) {
      throw Error('User with that name already exists!');
    }
    if (findUser?.email) {
      throw Error('User with that email already exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await this.userRepository.registerUser(
      username,
      hashedPassword,
      email
    );
    return data;
  }
}
