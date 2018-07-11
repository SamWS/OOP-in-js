
// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);

//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(val) {
//     if (val <= 0) throw new Error('invalid radius');
//     _radius.set(this, val);
//   }
// }

// const c = new Circle(1);

// Inheritance

// class Shape {
//   constructor(colour) {
//     this.colour = colour;
//   }

//   move() {
//     console.log('move');
//   }
// }

// class Circle extends Shape {
//   constructor(colour, radius) {
//     super(colour);
//     this.radius = radius;
//   }

//   draw() {
//     console.log('draw');
//   }
// }

// const c = new Circle('red', 1);

class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  move() {
    console.log('circle move');
  }
}
