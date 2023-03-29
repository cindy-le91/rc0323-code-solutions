/* exported ransomCase */
// define a function named 'ransomCase' that takes a single argument 'string'
// assign empty string to a new variable named 'newString'
// for..in loop
// if index has a remainder, it is at an odd index so uppercase, concatenate to 'newString'
// if index has no remainder, leave lowercased, concatenate to 'newString'
function ransomCase(string) {
  let newString = '';

  for (const index in string) {

    if (index % 2 !== 0) {
      newString += string[index].toUpperCase();
    } else {
      newString += string[index].toLowerCase();
    }

  }
  return newString;
}
ransomCase('LearningFuze');
