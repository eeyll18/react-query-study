import React, { useState } from "react";
import { useAddPost } from "../hooks/usePosts";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { mutate, isPending } = useAddPost();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title || !body) return;

    mutate(
      { title, body, userId: 1 }, // yeni post objesi
      {
        onSuccess: (data) => {
          setTitle("");
          setBody("");
          console.log("post eklendi:", data); // kontrol
          alert("Yeni Gönderi Eklendi.");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Yeni Gönderi Ekle</h3>
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="İçerik"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Ekleniyor..." : "Ekle"}
      </button>
    </form>
  );
}

export default AddPost;
