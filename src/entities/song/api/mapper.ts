import { Song } from "../models/model";
import { SongDTO } from "./dto";

export const adaptSongDto = (dto: SongDTO): Song => ({
  id: String(dto.id),
  title: dto.title,
  fullTitle: `${dto.disc_no} / ${dto.title}`,
  artistIds: dto.artist_ids.map(String),
});
