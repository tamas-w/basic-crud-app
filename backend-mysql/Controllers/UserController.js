import { UserService } from '../Services/UserService.js';

export class UserController {
  constructor() {
    this.userService = new UserService();
    this.register = this.register.bind(this);
  }

  async register(req, res) {
    try {
      const { username, password, email } = req.body;
      const data = await this.userService.register(username, password, email);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({error: err.message});
    }
  }
}
