import { notes } from './notes';
import { combineReducers } from 'redux';
import { setActiveNoteId } from './setActiveNoteId';
import { toggleNotesDrawer } from './toggleNotesDrawer';

export const combinedReducers = combineReducers({
  notes: notes,
  activeNoteId: setActiveNoteId,
  showNotesDrawer: toggleNotesDrawer
});
