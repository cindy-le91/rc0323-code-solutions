/* exported pick */
function pick(source, keys) {
  const newObject = {};
  for (const index in keys) {
    if (source[keys[index]] !== undefined) {
      newObject[keys[index]] = source[keys[index]];
    }
  }
  console.log(newObject);
  return newObject;
}
