/* exported capitalizeWords */
// define a function named 'capitalizeWords' that takes a single argument 'string'
// assign empty string to new variable 'newString'
// using for..in loop, look at each character in string
// if string is a space
// newString will be equal to
function capitalizeWords(string) {
  let newString = '';

  for (let index in string) {
    index = parseInt(index);

    if (parseInt(index) === 0) {
      newString += string[index].toUpperCase();
      continue;
    }

    if (string[index - 1] === ' ') {
      newString += string[index].toUpperCase();
    } else {
      newString += string[index].toLowerCase();
    }
  }

  return newString;
}
