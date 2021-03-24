import express from 'express';
import cors from 'cors';
import sessionRouter from '../src/Routes/SessionRoutes.js';
import userRouter from '../src/Routes/UserRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/session', sessionRouter);
app.use('/api/user', userRouter);

app.get('/api', (req, res) => {
  res.send('api is up');
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
