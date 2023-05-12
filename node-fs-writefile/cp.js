import { readFile, writeFile } from 'node:fs/promises';

const fileToCopy = process.argv[2];
const copyName = process.argv[3];

const contents = await readFile(fileToCopy, { encoding: 'utf8' });

await writeFile(copyName, contents, (err) => {
  if (err) throw err;
  console.log('File copied');
});
