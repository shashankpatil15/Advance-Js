/**
 * PROPERTY OF FUNCTIONS
 * contextual name */
let user = {

    sayHi() {
      // ...
    },
  
    sayBye: function() {
      // ...
    }
  
  }
  
  console.log(user.sayHi.name); // sayHi
  console.log(user.sayBye.name); // sayBye

  /**
   * The “length” property
   */
  function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}
  
  console.log(f1.length); // 1
  console.log(f2.length); // 2
  console.log(many.length); // 2

  /**The "new Function" syntax */
  /**let func = new Function ([arg1[, arg2[, ...argN]],] functionBody) */

  let sum = new Function('a', 'b', 'return a + b');

  console.log( sum(1, 2) ); // 3

  /**new Function allows to turn any string into a function */
  /**
   * when a function is created using new Function, its [[Environment]] 
   * references not the current Lexical Environment, but instead the global one.
   */
  function getFunc() {
    let value = "test";
  
    let func = new Function('console.log(value)');
  
    return func;
  }
  
  getFunc()(); // error: value is not defined

  /**Reglar function declareation */

  function getFunc() {
    let value = "test";
  
    let func = function() { console.log(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunc
