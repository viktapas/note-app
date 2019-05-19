import { SEARCH_NOTES } from "../action-types";

const initialState = { filteredNotesId: [], isSearching: false, queryText: "" };

export const searchNotes = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NOTES:
      if (action.payload.query) {
        const notesObj = action.payload.notes;
        const keys = Object.keys(notesObj);
        const keysContainingQuery = [];
        keys.map(key =>
          (function() {
            {
              const title = notesObj[key].title;
              if (title.includes(action.payload.query)) {
                keysContainingQuery.push(key);
              }
            }
          })()
        );
        return {
          filteredNotesId: keysContainingQuery,
          isSearching: true,
          queryText: action.payload.query
        };
      }
      return {
        filteredNotesId: [],
        isSearching: false,
        queryText: ""
      };
    default:
      return state;
  }
};
