import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, ...args] = process.argv;

async function processArguments() {

  switch (operation) {
    case 'read':
      return readNotes();
    case 'create':
      return createNote(args[0]);
    case 'update':
      return updateNote(args[0], args[1]);
    case 'delete':
      return deleteNote(args[0]);
    default:
      throw new Error(`Unrecognized operation: ${operation}`);
  }
}

async function readNotes() {

  const jsonData = await readFile('./data.json', 'utf8');

  const data = JSON.parse(jsonData);

  const notes = data.notes;

  for (const note in notes) {

    console.log(`${note}: ${notes[note]}\n`);
  }
}

async function readData() {

  const data = await readFile('./data.json', 'utf8');

  return JSON.parse(data);
}

async function createNote(note) {

  const data = await readData();

  const noteId = data.nextId;

  data.nextId++;

  data.notes[noteId] = note;
  console.log(data);

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

async function updateNote(id, note) {

  const data = await readData();

  if (data.notes[id] !== undefined) {

    data.notes[id] = note;
  }

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

try {
  await processArguments();
} catch (err) {
  console.log(err.message);
}

async function deleteNote(id) {
  const data = await readData();
  delete data.notes[id];

  await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
}
