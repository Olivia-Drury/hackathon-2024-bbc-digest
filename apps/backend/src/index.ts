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
      category: 'news-article',
      data: {
        title: "Chris McCausland's journey from salesman to Strictly winner",
        image:
          'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/4252/live/f197d930-b944-11ef-a0f2-fd81ae5962f4.jpg.webp',
      },
    },
    {
      id: 'b006vb2f',
      favourite: false,
      category: 'iplayer-programme',
      data: {
        title: 'Escape to the Country',
        image: 'https://ichef.bbci.co.uk/images/ic/464x261/p0hwj6l0.jpg',
      },
    },
    {
      id: 'p04d42rc',
      favourite: true,
      category: 'sounds-programme',
      data: {
        title: 'CrowdScience',
        image: 'https://ichef.bbci.co.uk/images/ic/1008x567/p0d0l8bz.jpg',
      },
    },
  ];

  res.send(feed);
});

app.get(`/news-articles/:id`, (req: Request, res: Response) => {
  const article = data.newsArticles.find(({ id }) => id === req.params.id);

  if (!article) {
    res.status(404);
    res.send('Article not found');
  }

  res.send(article);
});

app.get(`/sounds-programmes/:id`, (req: Request, res: Response) => {
  // TODO: Fetch req.params.id

  res.send({
    id: 'p04d42rc',
    favourite: false,
    title: 'CrowdScience',
    image: 'https://ichef.bbci.co.uk/images/ic/1008x567/p0d0l8bz.jpg',
    episodes: [
      {
        id: 'w3ct5rj2',
        title: "Why can't my dog live as long as me?",
        image: 'https://ichef.bbci.co.uk/images/ic/320x320/p0k5wb96.jpg.webp',
        mediaUrl: '/media/audio-1234.mp3',
      },
    ],
  });
});

app.get(`/iplayer-programmes/:id`, (req: Request, res: Response) => {
  // TODO: Fetch req.params.id

  res.send({
    id: 'b006vb2f',
    favourite: false,
    title: 'Escape to the Country',
    image: 'https://ichef.bbci.co.uk/images/ic/464x261/p0hwj6l0.jpg',
    episodes: [
      {
        id: 'm0025x26',
        title: 'Series 25: 24. Northumberland',
        image: 'https://ichef.bbci.co.uk/images/ic/464x261/p0k5vwbf.jpg',
        mediaUrl: '/media/video-1234.mp4',
      },
      {
        id: 'm0025x26',
        title: 'Series 25: 23. Berkshire',
        image: 'https://ichef.bbci.co.uk/images/ic/464x261/p0k5vvt7.jpg',
        mediaUrl: '/media/video-5678.mp4',
      },
    ],
  });
});

app.use('/media', express.static(resolve(__dirname, '../media')));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
