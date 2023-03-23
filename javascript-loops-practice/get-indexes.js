/* exported getIndexes */
function getIndexes(array) {
  const arrayIndex = [];
  for (const index in array) {
    arrayIndex.push(parseInt(index));
  }
  return arrayIndex;
}

// for (let i = array; i <= array.length, i++) {
//  array.push(array[i]);
// }
// return arrayIndex;
// }
