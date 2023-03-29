/* exported numVowels */
// define a function named 'numVowels' that takes a single argument 'string'
// assign number 0 to new variable 'count'
// start for..in loop that checks each character in string
// if statement that checks if each character is a vowel
// count the character that are vowels
// return count

function numVowels(string) {
  let count = 0;
  for (const index in string) {
    if (string[index] === 'a' || string[index] === 'e' || string[index] === 'i' || string[index] === 'o' || string[index] === 'u' ||
    string[index] === 'A' || string[index] === 'E' || string[index] === 'I' || string[index] === 'O' || string[index] === 'U') {
      count++;
    }
  }
  return count;
}
