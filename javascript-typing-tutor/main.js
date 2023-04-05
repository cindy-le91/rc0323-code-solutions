document.addEventListener('keydown', function (event) {
  if (event.key === wordObject[letterCounter]) {
    const letter = document.getElementById(letterCounter);
    letter.className = 'toggle-green';
    letterCounter++;
  }
});

let letterCounter = 1;
const wordObject = {
  1: 'g',
  2: 'r',
  3: 'u',
  4: 'm',
  5: 'p',
  6: 'y',
  7: ' ',
  8: 'w',
  9: 'i',
  10: 'z',
  11: 'a',
  12: 'r',
  13: 'd',
  14: 's',
  15: ' ',
  16: 'm',
  17: 'a',
  18: 'k',
  19: 'e',
  20: ' ',
  21: 't',
  22: 'o',
  23: 'x',
  24: 'i',
  25: 'c',
  26: ' ',
  27: 'b',
  28: 'r',
  29: 'e',
  30: 'w'
};
