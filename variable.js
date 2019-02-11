/**
 * There are two main differences of var:

Variables have no block scope, they are visible minimum at the function level.
Variable declarations are processed at function start.
 */
function sayHi() {
    var phrase = "Hello"; // local variable, "var" instead of "let"
  
    console.log(phrase); // Hello
  }
  
  sayHi();
  
  console.log(phrase); // Error, phrase is not defined

  /** */
  function sayHi() {
    console.log(phrase);
  
    var phrase = "Hello";
  }
  
  sayHi();

  /** */
  function sayHi() {
    var phrase; // declaration works at the start...
  
    console.log(phrase); // undefined
  
    phrase = "Hello"; // ...assignment - when the execution reaches it.
  }
  
  sayHi();

  /**GLOBAL VARIABLE BY USING WINDOWS.VARIABLENAME */
  /**
   * To access exactly the global variable if the function has the local one with the same name.
   */
  var user = "Global";

    function sayHi() {
    var user = "Local";

    alert(window.user); // Global
    }

    sayHi();
    