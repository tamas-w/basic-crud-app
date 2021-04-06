import express from 'express';
import { UserController } from '../Controllers/UserController.js';
import { validateUser } from '../Middlewares/UserRegistrationValidator.js';

const router = express.Router();

const userController = new UserController();

router.post('/', validateUser,(req, res) => {
  userController.register(req, res);
});

export default router;
