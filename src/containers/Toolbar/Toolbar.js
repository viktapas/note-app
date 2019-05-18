import React, { Component } from 'react';
import store from '../../store';
import { generateNewNote } from '../../store/static-data';
import {
  createNewNote,
  deleteNote,
  setActiveNoteId
} from '../../store/actions';

import * as styles from './Toolbar.module.css';

class Toolbar extends Component {
  render() {
    return (
      <div className={styles.Toolbar}>
        <button className={styles.Button} onClick={this.props.toggleSideBar}>
          =
        </button>
        <button className={styles.Button} onClick={this.handleDeleteNote}>
          Delete
        </button>
        <button className={styles.Button} onClick={this.handleCreateNote}>
          New
        </button>
      </div>
    );
  }

  handleDeleteNote = () => {
    const activeNoteId = store.getState().activeNoteId;
    if (activeNoteId) {
      store.dispatch(deleteNote(activeNoteId));
      const nextActiveNoteId = Object.keys(store.getState().notes).pop();
      store.dispatch(setActiveNoteId(nextActiveNoteId));
    }
  };
  handleCreateNote = () => {
    const newNote = generateNewNote();
    store.dispatch(createNewNote(newNote));
  };
}

export default Toolbar;
