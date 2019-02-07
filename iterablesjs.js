/*  ITERABLES:- The iterable protocol allows JavaScript objects to define or 
customize their iteration behavior, such as what values are looped over in a for..of 
construct. Some built-in types are built-in iterables with a default iteration behavior

HOW ITERATION WORKS?
1 When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
2 Onward, for..of works only with that returned object.
3 When for..of wants the next value, it calls next() on that object.
4 The result of next() must have the form {done: Boolean, value: any}, where done=true means that the iteration is finished, otherwise value must be the new value.

***************************************************
Previous JS

var someString = 'hi';
typeof someString[Symbol.iterator];   
var iterator = someString[Symbol.iterator]();
iterator + '';                               // "[object String Iterator]"
 
iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }
********************************************************************

*/
let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }