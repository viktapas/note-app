import React from 'react';
import Note from '../Note/Note';

import './Notes.css';

const Notes = ({ notes }) => {
  let notesArr = [];
  Object.keys(notes).map(id => notesArr.push(notes[id]));
  console.log(notesArr);
  return (
    <div className="Notes">
      {notesArr.map(note => (
        <Note key={note.note_id} note={note} />
      ))}
      ;
    </div>
  );
};

export default Notes;
