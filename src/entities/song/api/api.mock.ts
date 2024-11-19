import { v4 as uuidv4 } from "uuid";
import { AddSongForm, Song } from "../models/model";

class SongApiMock {
  private static instance: SongApiMock;

  private songs: Record<string, Song> = {
    "101": {
      id: "101",
      title: "Imagine",
      fullTitle: "Imagine by John Lennon",
      artistIds: ["john-lennon"],
    },
    "102": {
      id: "102",
      title: "Hotel California",
      fullTitle: "Hotel California by Eagles",
      artistIds: ["eagles"],
    },
    "103": {
      id: "103",
      title: "Under Pressure",
      fullTitle: "Under Pressure by Queen & David Bowie",
      artistIds: ["queen", "david-bowie"],
    },
  };

  private constructor() {}

  public static getInstance(): SongApiMock {
    if (!SongApiMock.instance) {
      SongApiMock.instance = new SongApiMock();
    }
    return SongApiMock.instance;
  }

  public async getSongs(): Promise<Song[]> {
    return Object.values(this.songs);
  }

  public async addSongs(song: AddSongForm): Promise<void> {
    const id = uuidv4();
    this.songs[id] = {
      id,
      title: song.title,
      fullTitle: `${song.title} by ${song.artist}`,
      artistIds: [song.artist],
    };
  }
}

export const songApi = SongApiMock.getInstance();
