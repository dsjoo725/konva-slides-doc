import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddSongForm } from "./model";
import { songApi } from "../api/api.mock";
import { SongQueryKeys } from "./use-query";

export const useAddSongMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (song: AddSongForm) => {
      await songApi.addSongs(song);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SongQueryKeys.songs.queryKey });
    },
  });
};
