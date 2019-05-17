import React from 'react';
import moment from 'moment';
import store from '../../store';
import { setActiveNoteId } from '../../store/actions';

import './Note.css';

const Note = ({ note }) => {
  const { note_id, title, text, lastUpdate } = note;
  const activeNoteId = store.getState().activeNoteId;
  return (
    <div
      className={note_id === activeNoteId ? 'Note Note__active' : 'Note'}
      onClick={handleNoteClick.bind(null, note)}
    >
      <div className="Title">{title}</div>
      <div className="Text">{text}</div>
      <div className="Timestamp">
        {moment(lastUpdate).format('MMM DD, YYYY') +
          ' at ' +
          moment(lastUpdate).format('LT')}
      </div>
    </div>
  );
};

function handleNoteClick({ note_id }) {
  store.dispatch(setActiveNoteId(note_id));
}

export default Note;
