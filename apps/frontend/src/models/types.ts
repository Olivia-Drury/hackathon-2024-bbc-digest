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

export interface soundsData extends HomeFeed {
  title: string;
  image: string;
  episodes: [soundsEpisodeData];
}

export type soundsEpisodeData = {
  id: string;
  title: string;
  image: string;
  mediaUrl: string;
}


export interface newsData extends HomeFeed {
  title: string;
  image: string;
  publicationDate: string;
  content: string;
}

export enum NavigationDigest {
  home = 0,
  shuffle = 1,
  favourites = 2,
}
