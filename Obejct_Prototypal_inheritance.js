/**
 * [[PROOTOTYPE]]
 * In JavaScript, objects have a special hidden property [[Prototype]] 
 * (as named in the specification), that is either null or references another object. 
 * That object is called “a prototype”:
 */
/******************************************
 * When we want to read a property from object, and it’s missing, JavaScript automatically 
 * takes it from the prototype. In programming, such thing is called “prototypal inheritance”.
 */
    /******__proto__******* */
    let animal = {
        eats: true
      };
      let rabbit = {
        jumps: true
      };
      
      rabbit.__proto__ = animal; // (*) sets animal to be a prototype of rabbit
      
      // we can find both properties in rabbit now:
      console.log( rabbit.eats ); // true (**)
      console.log( rabbit.jumps ); // true.
      /* when  console.log() tries to read property rabbit.eats (**), it’s not in rabbit,
       so JavaScript follows the [[Prototype]] reference and finds it in animal 
       (look from the bottom up):*/

       let animal = {
        eats: true,
        walk() {
          alert("Animal walk");
        }
      };
      
      let rabbit = {
        jumps: true,
        __proto__: animal
      };
      
      // walk is taken from the prototype
      rabbit.walk(); // Animal walk
      /**No matter where the method is found: in an object or its prototype.
       *  In a method call, this is always the object before the dot. */

/**Methods for prototypes */
/**
 *  /* Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] (can be null) and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).
Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of enumerable own string property names/values/key-value pairs.
Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic property names.
Object.getOwnPropertyNames(obj) – returns an array of all own string property names.
Reflect.ownKeys(obj) – returns an array of all own property names.
obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
 */
