/* exported includes */
// define a function named 'includes' that takes two arguments, 'array' and 'value'
// start for..in loop that loops through given array
// if the element matches the 'value' in any iteration
// return true
// otherwise return false
function includes(array, value) {
  for (const index in array) {
    if (array[index] === value) {
      return true;
    }
  }
  return false;
}
