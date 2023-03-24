/* exported getKeys */
// define function named 'getKeys' that takes one argument 'object'
// assign an empty array to a new variable named 'newArray'
// write for..in loop that gets keys in object
// push value of keys into 'newArray'

function getKeys(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
