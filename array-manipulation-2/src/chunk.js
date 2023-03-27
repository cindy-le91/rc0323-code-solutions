/* exported chunk */
// define a function named 'chunk' that takes two arguments, 'array' and 'size'
// set empty array to new variable 'finalArray'
// set empty array to new variable 'newArray'
// push each index into 'newArray' when the 'newArray' length is equal to 'size' parameter
// push 'newArray' into 'finalArray'
// reset 'newArray' to empty
// in cases where there is a remainder, push the remaining values to 'finalArray'
// return 'finalArray'
function chunk(array, size) {
  const finalArray = [];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (newArray.length === size) {
      finalArray.push(newArray);
      newArray = [];
    }
    if (i === array.length - 1 && array.length % size > 0) {
      finalArray.push(newArray);
    }
  }
  return finalArray;
}
