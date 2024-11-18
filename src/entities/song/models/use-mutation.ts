import { useMutation } from "@tanstack/react-query";
import { Song } from "./model";
import { songApi } from "../api/api.mock";

export const useAddSong = () => {
  return useMutation({
    mutationFn: async (song: Song) => {
      const data = await songApi.addSongs(song);
      return data;
    },
  });
};
