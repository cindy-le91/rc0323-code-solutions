/* exported truncate */
// define a function named 'truncate' that takes two arguments, 'length' and 'string'
// return string with 'length' characters removed and concatenate with ellipsis

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
