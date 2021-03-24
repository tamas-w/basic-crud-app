import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  sessionController.login(req, res);
});

export default router;
