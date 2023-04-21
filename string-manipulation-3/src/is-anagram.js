/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const sortedFirst = firstString.replace(/\s/g, '').split('').sort().join('');
  const sortedSecond = secondString.replace(/\s/g, '').split('').sort().join('');
  return sortedFirst === sortedSecond;
}
