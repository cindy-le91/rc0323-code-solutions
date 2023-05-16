import fs from 'fs';

const randomNumber = Math.floor(Math.random() * 100);

await fs.writeFile('random.txt', randomNumber.toString(), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
