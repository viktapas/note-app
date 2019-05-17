import React, { Component } from 'react';
import store from '../../store';
import { updateNote } from '../../store/actions';

import './Editor.css';

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        {this.props.note ? (
          <input
            value={this.props.note.text}
            onChange={this.handleChangeEvent}
          />
        ) : (
          <h2>Select a note</h2>
        )}
      </div>
    );
  }

  handleChangeEvent = e => {
    const text = e.target.value;
    store.dispatch(updateNote(this.props.note.note_id, text));
  };
}

export default Editor;
