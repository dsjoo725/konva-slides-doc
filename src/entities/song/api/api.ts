import { apiClient } from "@/shared/libs/api-client";

import { Song } from "../models/model";

import { SongDTO } from "./dto";
import { adaptSongDto } from "./mapper";

class SongApi {
  private static instance: SongApi;

  private constructor() {}

  public static getInstance(): SongApi {
    if (!SongApi.instance) {
      SongApi.instance = new SongApi();
    }
    return SongApi.instance;
  }

  public async getSongs(): Promise<Song[]> {
    return (await apiClient.get<SongDTO[]>("/auth/account")).map(adaptSongDto);
  }
}

export const songApi = SongApi.getInstance();
