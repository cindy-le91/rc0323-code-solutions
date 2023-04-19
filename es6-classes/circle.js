/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, Math.PI * 2 * radius);
    this.radius = radius;
  }

  describe() {
    return super.describe() + 'radius: ' + this.radius;
  }
}

const shapeCircle = new Circle(3);
console.log(shapeCircle);
console.log(shapeCircle.describe());
