const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');

// range(1, 15)
//   .pipe(filter(x => x % 2 === 1), map(x => x + x))
//   .subscribe(x =>
//     setTimeout(() => {
//       console.log(x)
//     }, 3000)
//   );

// let populations = {
//   canberra: 425000,
//   queanbeyan: 50000,
//   bungendore: 4000,
//   cooma: 8000,
//   goulburn: 23000,
//   yass: 6500,
//   murrumbateman: 3000
// };

// let count = 0;

// for (let city in populations) {
//   count += populations[city]
// }

// console.log(count)
