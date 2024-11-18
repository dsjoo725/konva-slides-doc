import { useAddSong } from "@/entities/song";
import React, { useState } from "react";

export const AddSongForm: React.FC = () => {
  const { mutate } = useAddSong();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ title, artistIds: [artist], fullTitle: "asdasd", id: "sadas" });
    setTitle("");
    setArtist("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};
