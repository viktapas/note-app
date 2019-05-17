import React from 'react';
import moment from 'moment';
import store from '../../store';
import { setActiveNoteId } from '../../store/actions';

import './Note.css';

const Note = ({ note }) => {
  const { title, text, lastUpdate } = note;
  return (
    <div className="Note" onClick={handleNoteClick.bind(null, note)}>
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
