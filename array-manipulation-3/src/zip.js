/* exported zip */
// define function zip that has two parameters, first and second
// create new empty array
// loop through 'first' array
// if at last index of 'first' array AND the 'second' array does not have elements to match 'first'
// return the new array
// push element at same index of both 'first' and 'second' array into new array
// return new array
function zip(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (parseInt(i) === parseInt(first.length - 1) && !second[i]) {
      return newArray;
    }
    newArray.push([first[i], second[i]]);
  }

  return newArray;
}
