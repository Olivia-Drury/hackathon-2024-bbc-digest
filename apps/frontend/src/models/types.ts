export type HomeFeed = {
  id: string;
  favourite: boolean;
  category: string;
  data: {
    title: string;
    image: string;
  };
};

export type DigestCommonType = {
  id: string;
  favourite: boolean;
  title: string;
  image: string;
};

export interface iPlayerData extends DigestCommonType {
  episodes: [iplayerSoundsEpisodeData];
}

export type iplayerSoundsEpisodeData = {
  id: string;
  title: string;
  image: string;
  mediaUrl: string;
};

export interface soundsData extends DigestCommonType {
  episodes: [iplayerSoundsEpisodeData];
}

export interface newsData extends DigestCommonType {
  publicationDate: string;
  content: string;
}

export enum NavigationDigest {
  home = 0,
  shuffle = 1,
}

export type CategoryType = soundsData | iPlayerData | newsData;
