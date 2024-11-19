import { useGetSongsQuery } from "@/entities/song";
import SongCard from "./song-card";

const SongCardList = () => {
  const { data: songs, isPending } = useGetSongsQuery();

  if (isPending) {
    return (
      <section>
        <h2>Loading...</h2>
        <p>Please wait while we fetch the songs.</p>
      </section>
    );
  }

  if (!songs) {
    return (
      <section>
        <h2>No Songs Available</h2>
        <p>Currently, there are no songs to display.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SongCardList;
