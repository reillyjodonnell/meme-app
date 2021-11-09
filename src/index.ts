import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();

const port: number = parseInt(process.env['PORT'] || '6969');

app.use('/', (req, res) => {
  res.send(`The server is up. 🔥🎊🦍`);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
