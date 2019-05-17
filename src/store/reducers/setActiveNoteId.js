import { SET_ACTIVE_NOTE_ID, NEW_NOTE } from '../action-types';

export const setActiveNoteId = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_NOTE_ID:
      return action.payload.id;
    case NEW_NOTE:
      console.log('set thi id to active note id');
      return action.payload.note.note_id;
    default:
      return state;
  }
};
