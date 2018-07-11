'use strict';

// // Class Declaration
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   draw() {
//     console.log('draw');
//   }

//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }

// }

// const circle = Circle.parse('{"radius": 1}')
// const c = new Circle(1);

// const Circle = function() {
//   this.draw = function() { console.log(this); }
// };

// const c = new Circle();
// // Method call.
// c.draw();

// const draw = c.draw;

// // Function call.
// draw();

// class Circle {
//   draw() {
//     console.log(this);
//   }
// }

// const c = new Circle();
// const draw = c.draw;
// draw();

// New primitive type, Symbol.
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {
//   }
// }

// const c = new Circle(1);
// console.log(c.radius);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key])

// Weak maps.
// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);

//     _move.set(this, () => {
//       console.log('move', this);
//     });

//   }

//   draw() {
//     console.log(_move.get(this)());
//   }

// }

// const c = new Circle(1);
