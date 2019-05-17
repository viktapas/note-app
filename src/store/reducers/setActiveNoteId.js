import { SET_ACTIVE_NOTE_ID, NEW_NOTE, DELETE_NOTE } from '../action-types';

export const setActiveNoteId = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_NOTE_ID:
      return action.payload.id || null;
    case NEW_NOTE:
      return action.payload.note.note_id;
    default:
      return state;
  }
};
