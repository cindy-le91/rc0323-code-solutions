/* exported omit */
// define a function named 'omit' tha takes two arguments, 'source' and 'keys'
function omit(source, keys) {
  // makes a new object that is identical to the object parameter. this is to be able to delete.
  const newObject = Object.assign({}, source);

  // loop through the keys
  for (const index in keys) {
    // if object has the property matching key
    if (newObject[keys[index]]) {
      // delete the property
      delete newObject[keys[index]];
    }
  }

  return newObject;
}
