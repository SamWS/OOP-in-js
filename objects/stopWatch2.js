function StopWatch() {
  let startTime, endTime, running, duration = 0;
  // Object.defineProperties(this, ['startTime', 'endTime', 'running', 'duration'], {
  //   'startTime': {
  //     value:
  //   }
  // })
  Object.defineProperty(this, 'duration', {
    get: function() { return duration; },
    set: function(val) { duration = val }
  });
  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
  });
  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
  });
  Object.defineProperty(this, 'reset', {
    get: function() { return reset; }
  });
}

StopWatch.prototype.start = function() {
  if (this.running) throw new Error('Stopwatch has already started.');

  this.running = true;

  this.startTime = new Date();
}

StopWatch.prototype.stop = function() {
  if (!this.running) throw new Error('Stopwatch is not started.');

  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += seconds;
}

StopWatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
}