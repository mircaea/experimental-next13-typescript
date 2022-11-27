"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("http://localhost:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}

export default CreateNote;
