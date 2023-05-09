/* exported flatten */
// define function flatter that has one paramenter, array
// create new empty array
// loop through array
// check to see if the index is an array
// if it is an array then push the value of the index to the new array
// else push to array
// return new array
function flatten(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {
      for (const index in array[i]) {
        newArray.push(array[i][index]);
      }
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
