/* exported union */
function union(first, second) {
  const newArray = [];

  for (let i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }

  return newArray;
}
