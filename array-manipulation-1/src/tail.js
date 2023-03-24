/* exported tail */
// define a new function named 'tail' that takes one argument 'array'
// assign an empty array to a new variable 'newArray'
// start for loop that starts at the second value in array, while array is less than the length of the array and increment by 1 each loop
// push all values after the first value of array into a new array
// return the new array

function tail(array) {
  const newArray = [];
  for (let n = 1; n < array.length; n++) {
    newArray.push(array[n]);
  }
  return newArray;
}
