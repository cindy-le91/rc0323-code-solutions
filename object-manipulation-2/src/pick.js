/* exported pick */
// define function named 'pick' that takes two arguments, 'source' and 'keys'
function pick(source, keys) {
  // make new empty object
  const newObject = {};
  // loop through source keys
  for (const index in keys) {
    // check if source keys exists in source
    if (source[keys[index]] !== undefined) {
      // if not undefined then add the property and value to newObject
      newObject[keys[index]] = source[keys[index]];
    }
  }
  return newObject;
}
