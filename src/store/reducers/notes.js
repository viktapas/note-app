import { getNotes } from '../static-data';
import { UPDATE_NOTE, NEW_NOTE, DELETE_NOTE } from '../action-types';

export const notes = (state = getNotes(2), action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          text: action.payload.text
        }
      };
    case NEW_NOTE:
      const newNote = action.payload.note;
      return {
        ...state,
        [newNote.note_id]: newNote
      };
    case DELETE_NOTE:
      if (action.payload.id) {
        let updatedNotes = {};
        Object.keys(state).map(id => {
          if (id !== action.payload.id) {
            updatedNotes[id] = state[id];
          }
        });
        return updatedNotes;
      }
      return state;
    default:
      return state;
  }
};

// interface Notes {
//     id:number: {
//         title: string,
//         text: string,
//         lastUpdate: date ,
//     },
//     id:number: {
//         title: string,
//         text: string,
//         lastUpdate: date ,
//     },
//     id:number: {
//         title: string,
//         text: string,
//         lastUpdate: date ,
//     },
// };
