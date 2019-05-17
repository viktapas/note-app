var shortid = require('shortid');

const generateNote = (id, currentCount) => {
  return {
    id: id,
    title: 'Note-' + currentCount,
    text: 'This is note-' + currentCount + '.',
    lastUpdate: new Date()
  };
};

export const getNotes = count => {
  let notes = {};
  for (let i = 0; i < 10; i++) {
    let id = shortid.generate();
    notes[id] = generateNote(id, i + 1);
  }
  return notes;
};
