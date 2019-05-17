import { getNotes } from '../static-data';

export const notes = (state = getNotes(10), action) => {
  return state;
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
