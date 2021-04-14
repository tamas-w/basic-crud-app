import express from 'express';
import { SessionController } from '../Controllers/SessionController.js';

const router = express.Router();
const sessionController = new SessionController();

router.post('/', (req, res) => {
  sessionController.login(req, res);
});

export default router;
