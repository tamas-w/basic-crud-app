import bcrypt from 'bcrypt';
import { SessionRepository } from '../Repositories/SessionRepository.js';

export class SessionService {
  constructor() {
    this.sessionRepository = new SessionRepository();
  }
  async login(password, email) {
    const user = await this.sessionRepository.findUser(email);
    if (!user) {
      throw Error("You haven't registered with that email yet!");
    }
    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      throw Error('You gave wrong password for that account');
    }
    return user;
  }
}
