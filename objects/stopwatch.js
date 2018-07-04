// My solution to the stopwatch task.

// function StopWatch() {
//   let startDate, endDate, active = 0;

//   this.start = function start() {
//     if (active) throw new Error('already started');
//     active = true;
//     startDate = new Date();
//   };
//   this.stop = function stop() {
//     if (!active) throw new Error('already stopped');
//     active = false;
//     endDate = new Date();
//   };
//   this.reset = function reset() {
//     startDate = null;
//     endDate = null;
//     active = false;
//   };

//   Object.defineProperty(this, 'duration', {
//     get: function getDuration() {
//       return (endDate - startDate) / 1000;
//     }
//   });
// }

// let sw = new StopWatch();

// Mosh's solution to the stopwatch task.

// function StopWatch() {
//   let startTime, endTime, running, duration = 0;

//   this.start = function() {
//     if (running)
//       throw new Error('Stopwatch has already started.');

//     running = true;

//     startTime = new Date();
//   }
//   this.stop = function() {
//     if (!running)
//       throw new Error('Stopwatch is not started.');

//     running = false;

//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   }
//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   }

//   Object.defineProperty(this, 'duration', {
//     get: function() { return duration; }
//   });
// }

// sw.start()

// setTimeout(() => {
//   sw.stop()
//   console.log(sw.duration)
// }, 5000);
