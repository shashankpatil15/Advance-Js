/**
 * What is a Closure?
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope from an inner 
function. In JavaScript, closures are created every time a function is created, 
at function creation time.
To use a closure, simply define a function inside another function and expose it.
 To expose a function, return it or pass it to another function.
 */


/**The function sayHi uses an external variable name. When the function runs, which value is it going to use? */

/*let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? 

//problem :- the question is: does it pick up the latest changes?


/**The function makeWorker makes another function and returns it. 
 * That new function can be called from somewhere else. Will it have access
 *  to the outer variables from its creation place, or the invocation place, or both? */

function makeWorker() {
    let name = "Pete";
  
    return function() {
        console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? "Pete" (name where created) or "John" (name where called)?

  /**Lexical Environment */
  /**
   * Environment Record – an object that has all local variables as its properties
   *  (and some other information like the value of this).
A reference to the outer lexical environment, usually the one associated 
with the code lexically right outside of it (outside of the current curly brackets).
   */
  //execution starts ---- emplty --- outer null
  let parse; //parse:undefined
  parse:"Hello"; // parse:Hello
  parse:"bye"; //parse:bye

  /**
   * A variable is a property of a special internal object, 
   * associated with the currently executing block/function/script.
    Working with variables is actually working with the properties of that object.
   */
  /*
  When code wants to access a variable – it is first searched for in the inner
   Lexical Environment, then in the outer one, then the more outer one and so on until 
   the end of the chain.
  */
 let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete"; // (*)

sayHi(); // Pete

/**Nested Functions */
function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer counter
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

/**
 * The locals of the nested function…
*The variables of the outer function…
*And so on until it reaches global variables.
 */

 /*****SOME IMPORTANT****
  * A closure is a function that remembers its outer variables and can access them. 
  * In some languages, that’s not possible, or a function should be written in a
  *  special way to make it happen. But as explained above, in JavaScript, all 
  * functions are naturally closures (there is only one exclusion, to be covered
  *  in The "new Function" syntax).
  */
 /**
  * When on an interview, a frontend developer gets a question about 
  * “what’s a closure?”, a valid answer would be a definition of the closure
  *  and an explanation that all functions in JavaScript are closures, and maybe
  *  few more words about technical details: the [[Environment]] property and how 
  * Lexical Environments work.
  */
 /**IF*** */
 let phrase ="Hello";
 if(true){
   let user="John";
   console.log(`${phrase},${user}`);
 }
 console.log(user); //Error,Can't see such varialbe

 /**FOR */
 for (let i = 0; i < 10; i++) {
  // Each loop has its own Lexical Environment
  // {i: value}
}
console.log(i); // Error, no such variable
 
/**
 * The code outside of the block (or inside another script) doesn’t see variables
 *  inside the block, because the block has its own Lexical Environment.
 */
/**“immediately-invoked function expressions” */
(function() {

  let message = "Hello";

  console.log(message); // Hello

})();

// Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();
