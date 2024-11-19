import { useNavigate } from "react-router-dom";
import { Song } from "@/entities/song";

interface Props {
  song: Song;
}
const SongCard = ({ song }: Props) => {
  const navigate = useNavigate();

  return (
    <article>
      <header>
        <h3>{song.title}</h3>
        <p>{song.fullTitle}</p>
      </header>
      <section>
        <h3>Artists</h3>
        <ul>
          {song.artistIds.map((artistId) => (
            <li key={artistId}>{artistId}</li>
          ))}
        </ul>
      </section>
      <footer>
        <button onClick={() => navigate(`/song/${song.id}`)}>Play</button>
        <button>Add to Favorites</button>
      </footer>
    </article>
  );
};

export default SongCard;
