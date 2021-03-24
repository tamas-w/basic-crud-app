import { SessionService } from '../Services/SessionService.js';

export class SessionController {
  constructor() {
    this.login = this.login.bind(this);
    this.sessionService = new SessionService();
  }
  async login(req, res) {
    try {
      const { password, email } = req.body;
      const data = await this.sessionService.login(password, email);
      req.session.isAuth = true;
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}
