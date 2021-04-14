import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../Repositories/UserRepository.js';

export class SessionService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async login(password, email) {
    const user = await this.userRepository.findUserForLogin(email);
    if (!user) {
      throw Error("You haven't registered with that email yet!");
    }
    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      throw Error('You gave wrong password for that account');
    }

    const token = await jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_KEY
    );
    return { token: token };
  }
}
