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
    const data = await readData();
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
      res.status(400).json({ error: 'content is a required field' });
    }

    const data = await readData();
    const note = { id: data.nextId, content: req.body.content };

    data.notes[data.nextId] = note;
    data.nextId++;
    const updatedData = JSON.stringify(data, null, 2);
    await writeData(updatedData);

    res.status(201);
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }

    delete data.notes[id];

    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const content = req.body.content;

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
    }

    const data = await readData();

    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }

    data.notes[id].content = content;

    await writeFile('./data.json', JSON.stringify(data, null, 2));

    res.status(200);
    res.json(data.notes[id]);
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});
