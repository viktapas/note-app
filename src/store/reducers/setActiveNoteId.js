import { SET_ACTIVE_NOTE_ID } from '../action-types';

export const setActiveNoteId = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_NOTE_ID:
      return action.payload.id;
    default:
      return state;
  }
};
