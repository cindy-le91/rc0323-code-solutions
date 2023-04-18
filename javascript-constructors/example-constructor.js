function ExampleConstructor() {

}
console.log('value of prototype: ', ExampleConstructor.prototype);
console.log('typeof prototype: ', typeof ExampleConstructor.prototype);

const doggo = new ExampleConstructor();
console.log(doggo);

const pet = doggo instanceof ExampleConstructor;
console.log('instanceOf: ', pet);
