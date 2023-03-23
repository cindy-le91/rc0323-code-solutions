/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ' ') {
      return string.split(' ');
    }
  }
  return [string];
}
