/* exported drop */
// define a function named 'drop' that takes two arguments, 'array' and 'count'
// use slice method to take off the number 'count' elements off beginning of array and return remaining elements into new array
function drop(array, count) {
  return array.slice(count, array.lenth);
}
