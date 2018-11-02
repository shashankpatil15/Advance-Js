'use strict'

/*function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("jack");

alert(user.name);
alert(user.isAdmin);
*/

//create the same object:
function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let john = User("John"); // redirects call to new User
  alert(john.name); // John

  //calculator

  function Calculatoer() {

    this.read = function() {
      this.a = +prompt('a?',0);
      this.b = +prompt('b',0);      
    };

    this.sum = function() {
      return this.a + this.b;
    };

    this.mul = function() {
      return this.a * this.b;
    };
  }

  let cal = new Calculatoer();

  cal.read();

  alert("sum:", cal.sum());
  alert("mul:" cal.mul());