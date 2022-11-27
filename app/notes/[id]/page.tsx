import styles from "../../../styles/Home.module.css";

async function getNote(id: string) {
  const res = await fetch(
    `http://localhost:8090/api/collections/notes/records/${id}`,
    // incremenetal static regeneration:
    // (regenerate the page on the server if it's older than number in seconds)
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = params?.id ? await getNote(params.id) : null;

  return (
    <div>
      <h1>notes/{note?.id}</h1>
      <div className={styles.note}>
        <h3>{note?.title}</h3>
        <h5>{note?.content}</h5>
        <p>{note?.created}</p>
      </div>
    </div>
  );
}
