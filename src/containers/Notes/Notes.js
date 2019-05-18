import React from "react";
import Note from "../Note/Note";

import "./Notes.css";

const Notes = ({ notes, showDrawer }) => {
  let notesArr = [];
  Object.keys(notes).map(id => notesArr.push(notes[id]));
  return (
    <div className={showDrawer ? "Notes" : "Notes Hide"}>
      <div className="Notes__container">
        {notesArr.map(note => (
          <Note key={note.note_id} note={note} />
        ))}
      </div>
      <div />
    </div>
  );
};

export default Notes;
