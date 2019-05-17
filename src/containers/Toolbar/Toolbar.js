import React, { Component } from 'react';
import store from '../../store';
import { createNewNote, setActiveNoteId } from '../../store/actions';
import { generateNewNote } from '../../store/static-data';

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
    console.log('Delete the note');
  };
  handleCreateNote = () => {
    const newNote = generateNewNote();
    store.dispatch(createNewNote(newNote));
  };
}

export default Toolbar;
