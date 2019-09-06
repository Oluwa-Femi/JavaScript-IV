/* 

Prototype Refactor

1(a). Copy and paste your code or the solution from yesterday*/
/*function Players(name) {
  this.name = name;
}
Players.prototype.introduction = function () {
  return 'Yo' + this.name + 'plays for Arsenal'
}
function Strikers(name, position) {
  this.position = position;
  Players.call(this, name)
}
Strikers.prototype = Object.create(Players.prototype)
Strikers.prototype.fly = function () {
  return `${this.name} is a legend!`
}

var Aubameyang = new Players('Aubameyang');
var Lacazette = new Strikers('Lacazette', 'CF');*/
/*1(b). Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.*/

class Players {
    constructor(name) {
      this.name = name;
    }
    introduction() {
      return 'Yo ' + this.name + ' plays for Arsenal'
    }
    celebration() {
      return 'siiiiiiii'
    }
  }
  class Strikers extends Players {
    constructor(name, position) {
      super(name);
      this.position = position;
    }
    fly() {
      return `${this.name} is a legend!`;
    }
  }
  var Aubameyang = new Players('Aubameyang');
  var Lacazette = new Strikers('Lacazette', 'CF');

  /* 

Prototype Refactor

2a. Copy and paste your code or the solution from yesterday
function Car(model_name, make) {
    this.model = model_name;
    this.make = make;
  };
  Car.prototype.carCrashed = function () {
    if (this.crash === true) {
      this.drive = false
      console.log(`I crashed at x miles!`);
    } else {
      return this.drive = true;
    }
  }


  2(b). Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.*/
  /*Class Car {
  constructor(model_name) {
    this.model = model_name;
  }
  constructor(make) {
    this.make = make;
  }
  car.crashed() {
    if (this.crash === true) {
        this.drive = false
        console.log(`I crashed at x miles!`);
      } else {
        return this.drive = true;
      }
  }
}*/