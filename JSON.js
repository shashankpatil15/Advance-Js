/**
 * The JSON (JavaScript Object Notation) is a general format to represent values and objects.
 *  It is described as in RFC 4627 standard. Initially it was made for JavaScript,
 *  but many other languages have libraries to handle it as well. So it’s easy to use
 *  JSON for data exchange when the client uses JavaScript and the server is written 
 * on Ruby/PHP/Java/Whatever.
 * 
 * *********Methods*********
 * JSON.stringify to convert objects into JSON.
 * JSON.parse to convert JSON back into an object.
 */
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
 
  /**
   * Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
     Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.
     JSON.stringify can be applied to primitives as well.
   */
  /*********************Skiped some points in JS************************
   * JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic properties.
Properties that store undefined.
   */
  let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  
  console.log( JSON.stringify(user) ); // {} (empty object)

  /*********** nested objects are supported and converted automatically.**********************************
   * 
   */
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };

  console.log( JSON.stringify(meetup) );

  /***JSON Syntax
   * let json = JSON.stringify(value[, replacer, space])
   * value
    A value to encode.
    replacer
    Array of properties to encode or a mapping function function(key, value).
    space
    Amount of space to use for formatting
   */
  
   /*****JSON Custome*******
    * let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

/**JSON Parse*************
 * // stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
 */

 /*****Common Mistakes*********
  * let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
  */

  /**Turn the object into JSON and back */
  let user = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));