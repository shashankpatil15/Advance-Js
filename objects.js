"use strict"

let user = new Object(); // Object constructor syntax

let user2 = {}; // Literals syntax

let user3 ={
    name :"shashank",
    age : 27
};

console.log(user3.name);
console.log(user3.age);

user3.isAdmin = true;

console.log(user3.isAdmin);

delete user3.age;

//Property Value Shortend
function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

  //...................................
  function makeUser(name, age) {
    return {
      name, // same as name: name
      age   // same as age: age
      // ...
    };
  }
  //.......................................
  let user = {
    name,  // same as name:name
    age: 30
  };
  //........................................
//   /Existence check
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

//...............................
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
//................................
let obj = {
    test: undefined
  };
  
  alert( obj.test ); // it's undefined, so - no such property?
  
  alert( "test" in obj ); // true, the property does exist!
  
  //........................................
  //Ordered like an object

  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for(let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
  //.............................................
  let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }
  //.......................................................
  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for(let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }
  //.............................................................
  //When an object variable is copied – the reference is copied, the object is not duplicated.
  //Two objects are equal only if they are the same object.
  let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
//................
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
//......................
//Const object
const user = {
    name: "John"
  };
  
  user.age = 25; // (*)
  
  alert(user.age); // 25
  //............................
  const user = {
    name: "John"
  };
  
  // Error (can't reassign user)
  user = {
    name: "Pete"
  };
  
