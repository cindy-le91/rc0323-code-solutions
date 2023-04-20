/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {

  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return super.describe() + 'width: ' + this.width;
  }
}

const shapeSquare = new Square(4);
console.log(shapeSquare);
console.log(shapeSquare.describe());
