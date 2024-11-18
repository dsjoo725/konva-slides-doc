import { Song } from "../models/model";

class SongApiMock {
  private static instance: SongApiMock;
  private songs = [
    {
      id: "101",
      title: "Imagine",
      fullTitle: "Imagine by John Lennon",
      artistIds: ["john-lennon"],
    },
    {
      id: "102",
      title: "Hotel California",
      fullTitle: "Hotel California by Eagles",
      artistIds: ["eagles"],
    },
    {
      id: "103",
      title: "Under Pressure",
      fullTitle: "Under Pressure by Queen & David Bowie",
      artistIds: ["queen", "david-bowie"],
    },
  ];

  private constructor() {}

  public static getInstance(): SongApiMock {
    if (!SongApiMock.instance) {
      SongApiMock.instance = new SongApiMock();
    }
    return SongApiMock.instance;
  }

  public async getSongs(): Promise<Song[]> {
    return this.songs;
  }

  public async addSongs(song: Song): Promise<Song[]> {
    this.songs = [...this.songs, song];
    return this.songs;
  }
}

export const songApi = SongApiMock.getInstance();
