function titleCase(string) {
  const lowercaseWords = ['in', 'of', 'for', 'on', 'and', 'the', 'to'];
  const uppercaseWords = ['api'];
  const specialCases = {
    javascript: 'JavaScript',
    'javascript:': 'JavaScript:'
  };
  const splitString = string.split(' ');

  for (let i = 0; i < splitString.length; i++) {
    const word = splitString[i].toLowerCase();

    if (lowercaseWords.includes(word) && i !== 0) {
      splitString[i] = word;
    } else if (uppercaseWords.includes(word)) {
      splitString[i] = word.toUpperCase();
    } else if (specialCases[word]) {
      splitString[i] = specialCases[word];
    } else if (word.includes('-')) {
      const hyphenWords = word.split('-');
      for (let j = 0; j < hyphenWords.length; j++) {
        hyphenWords[j] = hyphenWords[j].charAt(0).toUpperCase() + hyphenWords[j].slice(1).toLowerCase();
      }
      splitString[i] = hyphenWords.join('-');
    } else {
      splitString[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return splitString.join(' ');
}

titleCase();
