/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const wordsArray = [];
  for (const index in words) {
    wordsArray.push(words[index] + suffix);
  }
  return wordsArray;
}
