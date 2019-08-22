/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday*/
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
/*2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.*/

class Players {
    constructor(name) {
      this.name = name;
    }
    introduction() {
      return 'Yo' + this.name + 'plays for Arsenal'
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