/* exported reverseWords */
function reverseWords(string) {
  const stringArray = string.split(' ');
  for (const index in stringArray) {
    stringArray[index] = stringArray[index].split('').reverse().join('');
  }
  return stringArray.join(' ');
}
