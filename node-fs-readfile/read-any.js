import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const file = await readFile(process.argv[2], 'utf8');
    console.log(file);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

readDijkstra();
