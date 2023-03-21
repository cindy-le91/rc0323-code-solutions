const student = {
  firstName: 'Cindy',
  lastName: 'Le',
  age: 31
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'HR';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Subaru',
  model: 'Forester',
  year: 2020

};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Fred',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
