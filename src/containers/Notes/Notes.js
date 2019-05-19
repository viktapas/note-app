import React from "react";
import Note from "../Note/Note";
import store from "../../store";

import "./Notes.css";

const Notes = ({ showDrawer }) => {
  const state = store.getState();
  let notesArr = [];
  if (state.search.isSearching) {
    state.search.filteredNotesId.map(id => notesArr.push(state.notes[id]));
  } else {
    Object.keys(state.notes).map(id => notesArr.push(state.notes[id]));
  }

  let notes = notesArr.map(note => <Note key={note.note_id} note={note} />);
  // If search matches nothing
  if (state.search.isSearching && state.search.filteredNotesId.length === 0) {
    notes = <p>No search results found</p>;
  }

  return (
    <div className={showDrawer ? "Notes" : "Notes Hide"}>
      <div className="Notes__container">{notes}</div>
      <div />
    </div>
  );
};

export default Notes;
