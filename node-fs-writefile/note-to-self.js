import fs from 'fs';

const input = process.argv[2];

await fs.writeFile('note.txt', input, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
