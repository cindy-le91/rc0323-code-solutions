
import { readFile } from 'node:fs/promises';

const [, , ...filenames] = process.argv;

const promises = filenames.map((filename) => readFile(filename, 'utf-8'));
try {
  const files = await Promise.all(promises);
  console.log(files.join('\n'));
} catch (err) {
  console.error('Error reading files:', err);
  process.exit(1);
}
