/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'Shape has an area of ' + this.area + ' and a perimeter of ' + this.perimeter + '.';

  }
}
const shapeCalc = new Shape(25, 20);
console.log(shapeCalc.describe());
