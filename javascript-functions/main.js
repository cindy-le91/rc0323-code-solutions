function convertMinutesToSeconds(minutes) {
  const numberOfSeconds = minutes * 60;
  return numberOfSeconds;
}

const numberOfSeconds = convertMinutesToSeconds(3);
console.log('numberOfSeconds results', numberOfSeconds);

function greet(name) {
  return 'Hey, ' + name + '!';

}

const greetingResults = (greet('Beavis'));
console.log('greeting results:', greetingResults);

function getArea(width, height) {
  const areaResult = width * height;
  return areaResult;
}

const areaResult = getArea(6, 7);
console.log('getArea results:', areaResult);

function getFirstName(person) {
  const getFirstNameResult = person.firstName;
  return getFirstNameResult;
}

const person = {
  firstName: 'Cindy',
  lastName: 'Le'
};

const getFirstNameResult = getFirstName(person);
console.log('getFirstName results:', getFirstNameResult);

function getLastElement(array) {
  const getLastElement = array[array.length - 1];
  return getLastElement;
}

const array = ['propane', 'and', 'propane', 'accessories'];
const getLastElementResult = getLastElement(array);
console.log('getLastElement results:', getLastElementResult);
