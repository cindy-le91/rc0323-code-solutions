/* exported includesSeven */
function includesSeven(array) {
  for (const index in array) {
    if (array[index] === 7) {
      return true;
    }
  }
  return false;
}
