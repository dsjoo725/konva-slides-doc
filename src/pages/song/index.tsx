import { AddSongForm } from "@/features/add-song";
import { SongList } from "@/widgets/song-list/ui/song-list";

const SongPage = () => {
  return (
    <div>
      <SongList />
      <AddSongForm />
    </div>
  );
};

export default SongPage;
