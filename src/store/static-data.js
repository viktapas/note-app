import shortid from "shortid";
import faker from "faker";

export const generateNewNote = (randomTime? = false) => {
  return {
    note_id: shortid.generate(),
    title: "New Note",
    text: faker.lorem.paragraph(),
    lastUpdate: randomTime ? faker.date.recent().toJSON() : new Date().toJSON()
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
