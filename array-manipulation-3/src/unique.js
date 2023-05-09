/* exported unique */
// define function unique that has one parameter, array
// create new empty array
// loop through array
// if element at index in array is not in new array
// push to new array
// return new array
function unique(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
