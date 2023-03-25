/* exported capitalizeWord */
// define a function named 'capitalizeWord' that takes a single argument 'word'
// if word is strictly equal to javascript lowercased
// return 'JavaScript'
// return 'word' with first letter uppercased and rest lowercased

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
capitalizeWord('javascriPt');
