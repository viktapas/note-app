import { getNotes } from '../static-data';
import { UPDATE_NOTE } from '../action-types';

export const notes = (state = getNotes(10), action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          text: action.payload.text
        }
      };
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
