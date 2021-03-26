import { UserService } from '../Services/UserService.js';

export class UserController {
  constructor() {
    this.userService = new UserService();
    this.register = this.register.bind(this);
  }

  async register(req, res) {
    try {
      const { username, password, email } = req.body;
      const user = await this.userService.register(username, password, email);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
