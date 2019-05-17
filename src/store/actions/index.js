import { SET_ACTIVE_NOTE_ID, UPDATE_NOTE } from '../action-types';

export const setActiveNoteId = id => ({
  type: SET_ACTIVE_NOTE_ID,
  payload: { id: id }
});

export const updateNote = (id, text) => ({
  type: UPDATE_NOTE,
  payload: { id: id, text: text }
});
