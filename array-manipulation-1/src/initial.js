/* exported initial */
// define a function named 'initial' that takes one argument 'array'
// assign an empty array to a new variable named 'newArray'
// write a for a loop that starts at 0, while array is less than array length, and increment by 1 each loop
// push all values except for last value in array into a new array
// return the new array

function initial(array) {
  const newArray = [];
  for (let n = 0; n < array.length - 1; n++) {
    newArray.push(array[n]);
  }
  return newArray;
}
