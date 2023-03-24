/* exported compact */
function compact(array) {
  const numbers = [];
  for (let n = 0; n < array.length; n++) {
    // if
    if (array[n]) {
      numbers.push(array[n]);
    }
  }
  return numbers;
}
