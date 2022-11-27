import Link from "next/link";
import "../globals.css";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://localhost:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  // console.log("fetched", data);
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  console.log(" - loaded notes (length) - ", notes?.length);

  return (
    <div>
      <p>Notes page</p>
      <div className="notes">
        {notes?.map((note, idx) => (
          <Note key={idx} note={note} />
        ))}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="note-details">
        <h2>{title}</h2>
        <p>{id}</p>
        <p>{content}</p>
        <p>{created}</p>
      </div>
    </Link>
  );
}
