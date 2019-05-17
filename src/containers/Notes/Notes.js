import React from 'react';
import Note from '../../components/Note/Note';
import { store } from '../../store';

import './Notes.css';

const Notes = () => {
  const state = store.getState();
  let notesArr = [];
  Object.keys(state.notes).map(id => notesArr.push(state.notes[id]));
  console.log(notesArr);
  return (
    <div className="Notes">
      {notesArr.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          lastUpdate={note.lastUpdate}
        />
      ))}
      ;
    </div>
  );
};

export default Notes;
