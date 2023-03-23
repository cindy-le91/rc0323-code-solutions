/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  for (const index in values) {
    if (typeof values[index] !== 'string') {
      newArray.push(values[index]);
    }
  }
  return newArray;
}
