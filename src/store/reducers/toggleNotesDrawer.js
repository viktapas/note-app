import { TOGGLE_NOTES_DRAWER } from '../action-types';

export const toggleNotesDrawer = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_NOTES_DRAWER:
      return !state;
    default:
      return state;
  }
};
