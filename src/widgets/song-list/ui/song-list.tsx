import { useGetSongs } from "@/entities/song";

export const SongList = () => {
  const { data } = useGetSongs();

  return (
    <ul>
      {data?.map((song) => (
        <li key={song.id}>
          {song.title} - {song.artistIds}
        </li>
      ))}
    </ul>
  );
};
