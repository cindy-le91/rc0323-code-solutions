/* exported invert */
// define a function named 'invert' that takes one argument 'object'
function invert(object) {
  // make new empty object
  const newObject = {};

  // loop through source object
  for (const key in object) {
    // set newObject's key to source objects' value
    // and set the value to the source object's key.
    newObject[object[key]] = key;
  }

  return newObject;
}
