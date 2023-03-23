/* exported capitalize */

// define a function, named 'capitalized' that accepts one argument 'word'.
// take the first letter of the word and uppercase it; take the rest of the word and lowercase it. combine the strings and return
function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
