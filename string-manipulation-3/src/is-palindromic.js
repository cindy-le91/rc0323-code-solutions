/* exported isPalindromic */
function isPalindromic(string) {
  const stringWithoutSpaces = string.replace(/\s/g, ''); // remove spaces from string
  return stringWithoutSpaces === stringWithoutSpaces.split('').reverse().join('');
}
