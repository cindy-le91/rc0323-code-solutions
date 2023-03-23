/* exported reverseWord */
function reverseWord(string) {
  let reversedString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}
