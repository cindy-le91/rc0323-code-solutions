import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const file = await readFile('./dijkstra.txt', 'utf8');
    console.log(file);
    // const filePath = new URL('./dijkstra.txt', import.meta.url);
    // const contents = await readFile(filePath, { encoding: 'utf8' });
    // console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
  process.exit(1);
}

readDijkstra();
