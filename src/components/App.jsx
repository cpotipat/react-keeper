import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNote] = useState([]);

  function createNote(note) {
    updateNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    updateNote((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  console.log(notes);

  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
