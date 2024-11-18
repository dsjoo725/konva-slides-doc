import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";

import { songApi } from "../api/api.mock";

const SongQueryKeys = createQueryKeys("song", {
  songs: ["songs"],
});

export const useGetSongs = () => {
  return useQuery({
    queryKey: SongQueryKeys.songs.queryKey,
    queryFn: async () => await songApi.getSongs(),
  });
};
