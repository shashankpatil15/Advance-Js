/**CLASS 
 * In object-oriented programming, a class is an extensible 
 * program-code-template for creating objects, providing initial 
 * values for state (member variables) and implementations of behavior 
 * (member functions or methods).
 */
/**Functional class pattern */
function User(name) {
    this.sayHi = function() {
      console.log(name);
    };
  }
  
  let user = new User("John");
  user.sayHi(); // John


  /**Factory class pattern-- without creating "new" keyword */ 
  function User1(name, birthday) {
    // only visible from other methods inside User
    function calcAge() {
      return new Date().getFullYear() - birthday.getFullYear();
    }
  
    return {
      sayHi() {
        console.log(`${name}, age:${calcAge()}`);
      }
    };
  }
  
  let user1 = User1("John", new Date(2000, 0, 1));
  user1.sayHi(); // John, age:17

  /**Prototype-based classes--- highly used in programmin */
  function User(name, birthday) {
    this._name = name;
    this._birthday = birthday;
  }
  
  User.prototype._calcAge = function() {
    return new Date().getFullYear() - this._birthday.getFullYear();
  };
  
  User.prototype.sayHi = function() {
    alert(`${this._name}, age:${this._calcAge()}`);
  };
  
  let user = new User("John", new Date(2000, 0, 1));
  user.sayHi(); // John, age:17

  /**Prototype-based inheritance for classes */
  // Same Animal as before
function Animal(name) {
    this.name = name;
  }
  
  // All animals can eat, right?
  Animal.prototype.eat = function() {
    alert(`${this.name} eats.`);
  };
  
  // Same Rabbit as before
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype.jump = function() {
    alert(`${this.name} jumps!`);
  };
  
  // setup the inheritance chain
  Rabbit.prototype.__proto__ = Animal.prototype; // (*)
  
  let rabbit = new Rabbit("White Rabbit");
  rabbit.eat(); // rabbits can eat too
  rabbit.jump();

  /**
   * The line (*) sets up the prototype chain. So that rabbit first 
   * searches methods in Rabbit.prototype, then Animal.prototype. And then, 
   * just for completeness, let’s mention that if the method is not found in
   *  Animal.prototype, then the search continues in Object.prototype, because
   *  Animal.prototype is a regular plain object, so it inherits from it.
  */
 /** 
  * Constructors require new
  * Different string output
  * Class methods are non-enumerable
  * Classes have a default constructor() {}
  * Classes always use strict
  * 
  */
 /**Getter and Setter */
 class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name too short.

  /***Class inheritance, super */
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stopped.`);
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!

  /**Overriding a method */
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stopped.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stopped. White rabbit hides!

  /**Overriding constructor */
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    // ...
  }
  
  class Rabbit extends Animal {
  
    constructor(name, earLength) {
      this.speed = 0;
      this.name = name;
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // Doesn't work!
  let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.

  /**Class checking: "instanceof" */
  /**obj instanceof Class */
  
  
