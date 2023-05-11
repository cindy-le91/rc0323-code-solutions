import takeAChance from './take-a-chance.js';

const promise = takeAChance('Cindy');
promise.then((value) => {
  console.log(value);
}).catch((e) => {
  console.log(e);
});
