import React from 'react';
import Notes from './containers/Notes/Notes';
import Editor from './containers/Editor/Editor';
import Toolbar from './containers/Toolbar/Toolbar';

import store from './store';

import './App.css';

function App() {
  const state = store.getState();
  const activeNote = state.notes[state.activeNoteId];
  return (
    <div className="App">
      <Toolbar />
      <div className="Grid">
        <Notes notes={state.notes} />
        <Editor note={activeNote} />
      </div>
    </div>
  );
}

export default App;
