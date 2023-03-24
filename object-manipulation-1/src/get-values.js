/* exported getValues */
// define a function named 'getValues' that takes one argument 'object'
// assign an empty array to a new variable named 'newArray'
// write a for..in loop that gets the properties of the keys
// push the values of the keys into the 'newArray'
// return 'newArray'

function getValues(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
