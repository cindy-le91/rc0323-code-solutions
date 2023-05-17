import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

async function readData() {
  const data = await readFile('./data.json');
  return JSON.parse(data);
}

async function writeData(data) {
  writeFile('data.json', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    }
  });
}

app.get('/api/notes', async (req, res) => {

  try {
    // eslint-disable-next-line no-undef
    const data = await getData();
    const notes = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.json(data.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/notes', async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body.content) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
    const data = await readData();
    data.notes[data.nextId] = { id: data.nextId, content: req.body.content };
    data.nextId++;
    const updatedData = JSON.stringify(data, null, 2);
    await writeData(updatedData);

    res.status(201);
    res.json({ id: data.nextId - 1, content: req.body.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
