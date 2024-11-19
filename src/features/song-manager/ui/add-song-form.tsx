import React, { useState } from "react";
import { useAddSongMutation } from "@/entities/song";

const AddSongForm = () => {
  const { mutate } = useAddSongMutation();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { title, artist },
      {
        onSuccess: () => {
          setTitle("");
          setArtist("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Song</h2>
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

export default AddSongForm;
