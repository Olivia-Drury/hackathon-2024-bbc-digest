import express, { Express, Request, Response } from 'express';
import { resolve } from 'path';

import { data } from '../data';

const app: Express = express();
const port = 3000;

app.get('/home-feed', (req: Request, res: Response) => {
  const feed = [
    {
      id: 'c0ewlxvlw81o',
      favourite: true,
      category: 'news',
      data: {
        title: "Chris McCausland's journey from salesman to Strictly winner",
        image:
          'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4252/live/f197d930-b944-11ef-a0f2-fd81ae5962f4.jpg.webp',
      },
    },
    {
      id: 'b006vb2f',
      favourite: false,
      category: 'iPlayer',
      data: {
        title: 'Escape to the Country',
        image: 'https://ichef.bbci.co.uk/images/ic/464x261/p0hwj6l0.jpg',
      },
    },
    {
      id: 'p04d42rc',
      favourite: true,
      category: 'sounds',
      data: {
        title: 'CrowdScience',
        image: 'https://ichef.bbci.co.uk/images/ic/1008x567/p0d0l8bz.jpg',
      },
    },
  ];

  res.send(feed);
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

app.use('/media', express.static(resolve(__dirname, '../media')));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
