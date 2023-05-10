import add from './add.js';

import subtract from './subtract.js';

import multiply from './multiply.js';

import divide from './divide.js';

const number1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const number2 = parseInt(process.argv[4]);

switch (operator) {
  case 'add':
    console.log('result: ', add(number1, number2));
    break;
  case 'subtract':
    console.log('result: ', subtract(number1, number2));
    break;
  case 'multiply':
    console.log('result: ', multiply(number1, number2));
    break;
  case 'divide':
    console.log('result: ', divide(number1, number2));
}
