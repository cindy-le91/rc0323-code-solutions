/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];
  for (const index in values) {
    if (values[index]) {
      newArray.push(values[index]);
    }
  }
  return newArray;
}
