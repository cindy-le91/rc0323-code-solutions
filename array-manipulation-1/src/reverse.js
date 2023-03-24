/* exported reverse */
function reverse(array) {
  const numbers = [];
  for (let n = array.length - 1; n >= 0; n--) {
    numbers.push(array[n]);
  }
  return numbers;
}
