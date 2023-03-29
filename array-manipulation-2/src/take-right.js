/* exported takeRight */
// define a function named 'takeRight' that takes two arguments, 'array' and 'count'
// conditional statement that checks if 'count' is bigger than length of array
// if yes, return whole array
// otherwise, using slice method, return the number 'count' elements starting from the end of the array
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  return array.slice(array.length - count, array.length);

}
