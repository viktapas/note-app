import {
  SET_ACTIVE_NOTE_ID,
  UPDATE_NOTE,
  NEW_NOTE,
  DELETE_NOTE,
  TOGGLE_NOTES_DRAWER
} from "../action-types";

export const setActiveNoteId = id => ({
  type: SET_ACTIVE_NOTE_ID,
  payload: { id: id }
});

export const updateNote = (id, text, lastUpdate) => ({
  type: UPDATE_NOTE,
  payload: { id: id, text: text, lastUpdate: lastUpdate }
});

export const createNewNote = note => ({
  type: NEW_NOTE,
  payload: { note: note }
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: { id: id }
});

export const toggleNotesDrawer = () => ({
  type: TOGGLE_NOTES_DRAWER
});
