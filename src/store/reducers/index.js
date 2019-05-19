import { notes } from "./notes";
import { combineReducers } from "redux";
import { setActiveNoteId } from "./setActiveNoteId";
import { toggleNotesDrawer } from "./toggleNotesDrawer";
import { searchNotes } from "./searchNotes";

export const combinedReducers = combineReducers({
  notes,
  activeNoteId: setActiveNoteId,
  showNotesDrawer: toggleNotesDrawer,
  search: searchNotes
});
