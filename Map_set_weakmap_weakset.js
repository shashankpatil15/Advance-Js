/**
 * MAP:- The Map object holds key-value pairs and remembers the original insertion order of the keys
 * Object vs Map:- Map allows keys of any type.
 * The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
A Map may perform better in scenarios involving frequent addition and removal of key pairs.
 * 
 * Maethods of Map:-
 * 
 * new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
***************************************************************

 * 
 */

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

let emp ={
    id:102,
    name:'shashank',
    salary:12.33
}
console.log(typeof(emp));
console.log(emp.id);
console.log(typeof(emp.id));
console.log(emp.salary);

/**
 * Map can also use objects as keys.
 */
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123

/**
 *  built-in method Object.entries(obj) that returns an array of key/value pairs 
 * for an object exactly in that format
 */
let map1 = new Map(Object.entries({
    name: "John",
    age: 30
  }));

  console.log(map1);
  
  /************************************************************
   * Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
   */
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }
  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });
  
  /*********************SET************************** 
   * A Set is a collection of values, where each value may occur only once.

        Its main methods are:

        new Set(iterable) – creates the set, optionally from an array of
         values (any iterable will do).
        set.add(value) – adds a value, returns the set itself.
        set.delete(value) – removes the value, returns true if value existed at
         the moment of the call, otherwise false.
        set.has(value) – returns true if the value exists in the set, otherwise false.
        set.clear() – removes everything from the set.
        set.size – is the elements count.
   * 
   WHERE TO USE THIS IN REAL TIME APPLICATION?
   For example, we have visitors coming, and we’d like to remember everyone. 
   But repeated visits should not lead to duplicates. A visitor must be “counted” only once. 
  */

 let set = new Set();

 let john1 = { name: "John" };
 let pete1 = { name: "Pete" };
 let mary1 = { name: "Mary" };
 
 // visits, some users come multiple times
 set.add(john1);
 set.add(pete1);
 set.add(mary1);
 set.add(john1);
 set.add(mary1);
 
 // set keeps only unique values
 console.log( set.size ); // 3
 
 for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
 }

 /***************************WeakMap and WeakSet******************************
  * WeakSet is a special kind of Set that does not prevent JavaScript from removing 
  * its items from memory. WeakMap is the same thing for Map.
  * 
  */
    let john = { name: "John" };// the object can be accessed, john is the reference to it
    john = null; // overwrite the reference
                // the object will be removed from memory
                //Garbage Collection problem occures 
    // Solution of this problem by using array is below
    let john = { name: "John" };
    let array = [ john ];
    john = null; // overwrite the reference
    // john is stored inside the array, so it won't be garbage-collected
    // we can get it as array[0]

    /********By using Map */
    let john = { name: "John" };
    let map = new Map();
    map.set(john, "...");
    john = null; // overwrite the reference
    // john is stored inside the map,
    // we can get it by using map.keys()

    /*******The first difference from Map is that WeakMap keys must be objects, not primitive values:*********
     * 
     */
    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, "ok"); // works fine (object key)
    // can't use a string as the key
    weakMap.set("test", "Whoops"); // Error, because "test" is not an object

    /***************Second difference it free the object automatically */