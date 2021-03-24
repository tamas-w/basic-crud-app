import express from 'express';
import { UserController } from '../Controllers/UserController.js';

const router = express.Router();

const userController = new UserController();

router.post('/', (req, res) => {
  userController.register(req, res);
});

export default router;
