/* Methods of primitives
Primitive:- In JavaScript there are 6 primitive types: 
undefined, 
null, 
boolean, 
symbol,
string and 
number. 
Everything else is an object.

An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. 
There are other kinds of objects in JavaScript; functions, for example, are objects.

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!  we’ve made an object john with the method sayHi

Objects are “heavier” than primitives.
They require additional resources to support the internal machinery. 
But as properties and methods are very useful in programming, 
JavaScript engines try to optimize them to reduce the additional burden.

Primitives are still primitive. A single value, as desired.
The language allows access to methods and properties of strings, numbers, booleans and symbols.
When this happens, a special “object wrapper” (whenever you try to access a property of a string str, 
    JavaScript coerces the string value to an object, by new String(str). 
    This object is called a wrapper object.)

is created that provides the 
extra functionality, and then is destroyed.

/...................
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
/.................

The string str is a primitive. So in the moment of accessing its property, 
a special object is created that knows the value of the string, and has useful methods, 
like toUpperCase().
That method runs and returns a new string (shown by alert).
The special object is destroyed, leaving the primitive str alone.
So primitives can provide methods, but they still remain lightweight.

/...................
alert( typeof 1 ); // "number"

alert( typeof new Number(1) ); // "object"!
/.......................
The special primitives null and undefined are exceptions. They have no corresponding 
“wrapper objects” and provide no methods. In a sense, they are “the most primitive”.

/.................
alert(null.test); // error
/......................
This example clearly shows that primitives are not objects.
let str = "Hello";

str.test = 5; // (*)

alert(str.test);

/................................................



*/