/* exported isVowel */

// define a new function named 'isVowel' that takes one argument 'char'
// write if statement that checks if each character is a vowel, account for both upper and lower case
// if character is a vowel, return true
// otherwise return false
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  }
  return false;
}
