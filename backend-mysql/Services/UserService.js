import bcrypt from 'bcrypt';
import { UserRepository } from '../Repositories/UserRepository.js';

export class UserService {
  constructor() {
    this.userRepository = new UserRepository(); // ADD DI
  }

  async register(username, password, email) {
    const user = await this.userRepository.findOneUser(username, email);
    console.log('registerben findUSer', findUser);
    if (user.name === username) {
        throw new Error('User with that name already exists!');
        }
    
    if (user.email)  {
      throw new Error('User with that email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await this.userRepository.registerUser(
      username,
      hashedPassword,
      email
    );

    if (data.affectedRows !== 1) {
        throw new Error('something went wrong)'; 
        }

    return user;
  }
}
