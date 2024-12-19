import express, { Express, Request, Response } from 'express';
import { resolve } from 'path';

import { data } from '../data';
// import cors from "cors";

const app: Express = express();
const port = 3000;

app.get('/home-feed', (req: Request, res: Response) => {
  res.send(data.homeFeed);
});

app.get(`/news/:id`, (req: Request, res: Response) => {
  const article = data.news.find(({ id }) => id === req.params.id);

  if (!article) {
    res.status(404);
    res.send('Article not found');
  }

  res.send(article);
});

app.get(`/sounds/:id`, (req: Request, res: Response) => {
  const sound = data.sounds.find(({ id }) => id === req.params.id);

  if (!sound) {
    res.status(404);
    res.send('Sounds programme not found');
  }

  res.send(sound);
});

app.get(`/iPlayer/:id`, (req: Request, res: Response) => {
  const iPlayerProgramme = data.iPlayer.find(({ id }) => id === req.params.id);

  if (!iPlayerProgramme) {
    res.status(404);
    res.send('iPlayer programme not found');
  }

  res.send(iPlayerProgramme);
});

app.use("/media", express.static(resolve(__dirname, "../media")));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

