/* exported findIndex */
function findIndex(array, value) {
  for (const index in array) {
    if (array[index] === value) {
      return parseInt(index);
    }
  }
  return -1;
}
