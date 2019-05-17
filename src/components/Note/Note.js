import React from 'react';
import moment from 'moment';

const Note = ({ id, title, text, lastUpdate }) => {
  return (
    <div className="Note">
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

export default Note;
