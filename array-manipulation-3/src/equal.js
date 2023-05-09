/* exported equal */
// define function equal with two parameters, first and second
// loop through 'first' array
// if the element at the same index of both array is not equal to each other
// return false
// if loops completes, return true
function equal(first, second) {
  for (let i = 0; i <= first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}
