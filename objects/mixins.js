
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
}

function Person() {

}
mixin(Person.prototype, canEat, canWalk);

function Fish() {

}
mixin(Fish.prototype, canEat, canSwim);

const person = new Person();
person.walk();

const goldFish = new Fish();
goldFish.swim();
goldFish.eat();
