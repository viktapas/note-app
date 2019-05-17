import { SET_ACTIVE_NOTE_ID } from '../action-types';

export const setActiveNoteId = id => ({
  type: SET_ACTIVE_NOTE_ID,
  payload: { id: id }
});
