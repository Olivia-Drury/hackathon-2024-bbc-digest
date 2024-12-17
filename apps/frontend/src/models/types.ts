export type HomeFeed = {
  id: string;
  favourite: boolean;
  category: string;
  data: {
    title: string;
    image: string;
  };
};

export interface iPlayerData extends HomeFeed {
  title: string;
  image: string;
  episodes: [iplayerEpisodeData];
}

export type iplayerEpisodeData = {
  id: string;
  title: string;
  image: string;
  mediaUrl: string;
};
