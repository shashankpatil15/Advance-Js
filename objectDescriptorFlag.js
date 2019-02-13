/**Property flags and descriptors */

//Property flags

/**
 * Object properties, besides a value, have three special 
 * attributes (so-called “flags”):

** writable – if true, can be changed, otherwise it’s read-only.
** enumerable – if true, then listed in loops, otherwise not listed.
** configurable – if true, the property can be deleted and these attributes can 
be modified, otherwise not.
 */
/**
 * JavaScript Object.getOwnPropertyDescriptor() Method
 */
let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  alert( JSON.stringify(descriptor, null, 2 ) );
  /* 
  output
  property descriptor :
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
 /* Object.defineProperty() Method 
  * If the property exists, defineProperty updates its flags.
   Otherwise, it creates the property with the given value and flags; 
   in that case, if a flag is not supplied, it is assumed false.
 */
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
/**Object.defineProperties 
 * There’s a method Object.defineProperties(obj, descriptors) that allows
 *  to define many properties at once.
*/
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

/**Sealing an object globally
Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

Object.preventExtensions(obj)
Forbids to add properties to the object.
Object.seal(obj)
Forbids to add/remove properties, sets for all existing properties configurable: false.
Object.freeze(obj)
Forbids to add/remove/change properties, sets for all existing properties configurable: false, writable: false.
And also there are tests for them:

Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false. */

 

