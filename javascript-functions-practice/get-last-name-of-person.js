/* exported getLastNameOfPerson */
function getLastNameOfPerson(person) {
  const getLastNameOfPerson = person.lastName;
  return getLastNameOfPerson;
}

const person = {
  firstName: 'Ada',
  lastName: 'Lovelace'
};

getLastNameOfPerson(person);
