/**
 * Decorators and forwarding, call/apply
 */
function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) { // if the result is in the map
        return cache.get(x); // return it
      }
  
      let result = func(x); // otherwise call func
  
      cache.set(x, result); // and cache (remember) the result
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  console.log( slow(1) ); // slow(1) is cached
  console.log( "Again: " + slow(1) ); // the same
  
  console.log( slow(2) ); // slow(2) is cached
  console.log( "Again: " + slow(2) ); // the same as the previous line

  /**
   * When the smoke clears, decorators are just functions that take in a piece of code, 
   * try to make it nicer and extend it (decorate it!), and return that extended piece of code.
   *  A higher order function if you will.
   */
  /**Why we use decorators
So a decorator is a function that takes in another function and poops out code.  */
/**Rules to use */
/**you can only use decorators on Classes and Class members.
 * Decorating class method:-  @addStringToName
 * Decorating a Class :- target: in the case of decorating a Class, target is the constructor of the Class you’re decorating

 * */
