import React, { Component } from 'react';
import store from '../../store';
import { generateNewNote } from '../../store/static-data';
import { createNewNote, deleteNote } from '../../store/actions';

import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <p>Toolbar</p>
        <button onClick={this.handleDeleteNote}>Delete</button>
        <button onClick={this.handleCreateNote}>+New</button>
      </div>
    );
  }

  handleDeleteNote = () => {
    const activeNoteId = store.getState().activeNoteId;
    store.dispatch(deleteNote(activeNoteId));
  };
  handleCreateNote = () => {
    const newNote = generateNewNote();
    store.dispatch(createNewNote(newNote));
  };
}

export default Toolbar;
