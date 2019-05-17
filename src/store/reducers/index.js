import { notes } from './notes';
import { combineReducers } from 'redux';
import { setActiveNoteId } from './setActiveNoteId';

export const combinedReducers = combineReducers({
  notes: notes,
  activeNoteId: setActiveNoteId
});
