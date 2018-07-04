// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function duplicate() {
//   console.log('duplicate');
// }

// function Circle(radius, color) {
//   Shape.call(this, color);

//   this.radius = radius;
// }

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// extend(Circle, Shape);
// extend(Square, Shape);

// Circle.prototype.draw = function draw() {
//   console.log('draw');
// }

// function Square(size) {
//   this.size = size;
// }


// const s = new Shape();
// const c = new Circle(1, 'red');

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function duplicate() {
  console.log('duplicate');
}

function Circle() {

}

extend(Circle, Shape);

Circle.prototype.duplicate = function duplicate() {
  console.log('duplicate circle');
}

function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('duplicate square');
}

const shapes = [
  new Circle(),
  new Square()
]

for (let shape of shapes) {
  shape.duplicate();
}
