/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newArray = string.split('');
  const newString = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = newString;
  return newArray.join('');
}
