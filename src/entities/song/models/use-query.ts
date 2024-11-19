import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";

import { songApi } from "../api/api.mock";

export const SongQueryKeys = createQueryKeys("song", {
  songs: ["songs"],
});

export const useGetSongsQuery = () => {
  return useQuery({
    queryKey: SongQueryKeys.songs.queryKey,
    queryFn: async () => await songApi.getSongs(),
  });
};
