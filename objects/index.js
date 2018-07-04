// OOP in JavaScript, Objects

// If an object has one or more methods, it has behaviour.

// // Factory function.
// function createCircle(rad) {
//   return {
//     radius: rad,
//     draw: function draw() {
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1);

// // Constructor function.
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = {
//     x: 0,
//     y: 0
//   };
//   this.draw = function draw() {
//     console.log(this.radius);
//   };
//   this.getDefaultLocation = function getDefaultLocation() {
//     return defaultLocation;
//   }

//   Object.defineProperty(this, 'defaultLocation', {
//     get: function getDefaultLocation() {
//       return defaultLocation;
//     },
//     set: function setDefaultLocation(value) {
//       if (!value.x || !value.y) {
//         throw new Error('invalid location')
//       }
//       defaultLocation = value;
//     }
//   })
// }

// const newCircle = new Circle(10);
// newCircle.defaultLocation = {
//   x: 1,
//   y: 2
// };


// newCircle.location = { x: 1 };

// for (let key in newCircle) {
//   if (typeof circle[key] !== 'function') {
//     console.log(key, newCircle[key])
//   }
// }

// const keys = Object.keys(newCircle);
// console.log(keys);

// if ('radius' in circle) {
//   console.log('Circle has a radius');
// }

// Circle.call({}, 1)
// Circle.apply({}, [1,2,3])

// const another = new Circle(1);


// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }

// increase(obj);


function Circle(radius) {
  // Instance members.
  this.radius = radius;

  this.move = function() {
    console.log('move');
  }
}

// Prototype members.
Circle.prototype.draw = function draw() {
  console.log('draw');
}

Circle.prototype.toString = function toString() {
  return 'Circle with radius ' + this.radius;
}

let c1 = new Circle(1);
let c2 = new Circle(2);

console.log(Object.keys(c1));
for (let key in c1) console.log(key);

// let person = { name: 'Sam' };

// Object.defineProperty(person, 'name', {
//   writable: false
// });

// person.name = 'John';

// console.log(person);

Array.prototype.shuffle = function() {
  let a = [...this]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a;
}


