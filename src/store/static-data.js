import shortid from 'shortid';

export const generateNewNote = () => {
  return {
    note_id: shortid.generate(),
    title: 'New Note',
    text: 'This is new note body',
    lastUpdate: new Date()
  };
};

export const getNotes = count => {
  let notes = {};
  for (let i = 0; i < count; i++) {
    const id = shortid.generate();
    const newNote = generateNewNote();
    const noteId = newNote.note_id;
    notes[noteId] = newNote;
  }
  return notes;
};
