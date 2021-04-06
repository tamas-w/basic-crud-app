import bcrypt from 'bcrypt';
import { UserRepository } from '../Repositories/UserRepository.js';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(username, password, email) {
    const findUser = await this.userRepository.findUser(username, email);
    if (findUser?.name === username)
      throw Error('User with that name already exists!');
    if (findUser?.email)
      throw Error('User with that email already exists!');

    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await this.userRepository.registerUser(
      username,
      hashedPassword,
      email
    );

    if (!data) {
      throw Error(
        'Something went wrong during your registration process. Please try again later.'
      );
    }
    
    return {
      message: 'Registration was successful',
    };
  }
}
