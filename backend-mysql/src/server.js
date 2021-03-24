import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/session', sessionRouter);

app.get('/api', (req, res) => {
  res.send('api is up');
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
