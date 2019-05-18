import React from "react";
import moment from "moment";
import store from "../../store";
import { setActiveNoteId } from "../../store/actions";

import "./Note.css";

const Note = ({ note }) => {
  const { note_id, title, text, lastUpdate } = note;
  const activeNoteId = store.getState().activeNoteId;

  const fomattedTime =
    moment(new Date()).format("L") === moment(lastUpdate).format("L")
      ? moment(lastUpdate).format("LT")
      : moment(lastUpdate).format("dddd");
  return (
    <button
      className={note_id === activeNoteId ? "Note Note__active" : "Note"}
      onClick={handleNoteClick.bind(null, note)}
    >
      <div className="Text">{text}</div>
      <div className="Info">
        <span className="Timestamp">{fomattedTime}</span>
        <span className="Title">
          This is a very logn paragramp. ellipse it to nail it down.
        </span>
      </div>
    </button>
  );
};

function handleNoteClick({ note_id }) {
  store.dispatch(setActiveNoteId(note_id));
}

export default Note;
