import shortid from "shortid";
import faker from "faker";

export const generateNewNote = () => {
  return {
    note_id: shortid.generate(),
    title: "New Note",
    text: faker.lorem.paragraph(),
    lastUpdate: faker.date.recent()
  };
};

export const getNotes = count => {
  let notes = {};
  for (let i = 0; i < count; i++) {
    const newNote = generateNewNote();
    const noteId = newNote.note_id;
    notes[noteId] = newNote;
  }
  return notes;
};
