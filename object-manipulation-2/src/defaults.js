/* exported defaults */
// define a function named defaults that takes two arguments, 'target' and 'source
function defaults(target, source) {
// loop through source object
  for (const key in source) {
    // if target object already has property matching the source key
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      // skip over
      continue;
    }
    // add source's property to target object
    target[key] = source[key];
  }
}
