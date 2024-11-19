export type Song = {
  id: string;
  title: string;
  fullTitle: string;
  artistIds: Array<string>;
};

export type AddSongForm = {
  title: string;
  artist: string;
};
