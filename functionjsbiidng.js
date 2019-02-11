/**Function binding */

//Losing “this”

let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  setTimeout(user.sayHi, 1000); // Hello, undefined!
/** Solution ----------  Wrapper --------------
 * we call here by using function.
 */
  let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000); /* we also use this setTimeout(() => user.sayHi(), 1000); // Hello, John!*/


  /**
   * 
   */
  let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
  };
  setTimeout(() => user.sayHi(), 1000);
  // ...within 1 second
  user = { sayHi() { alert("Another user in setTimeout!"); } };
  // Another user in setTimeout?!?

  /** --------------- bind ------------------- */
  /**
   * The bind() function creates a new bound function (BF). 
   * A BF is an exotic function object (a term from ECMAScript 2015) that wraps
   *  the original function object. Calling a BF generally results in the execution 
   * of its wrapped function.
A BF has the following internal properties:

[[BoundTargetFunction]] - the wrapped function object;
[[BoundThis]] - the value that is always passed as this value when calling the wrapped function.
[[BoundArguments]] - a list of values whose elements are used as the first arguments to any 
call to the wrapped function.
[[Call]] - executes code associated with this object. Invoked via a function call expression. 
The arguments to the internal method are a this value and a list containing the arguments 
passed to the function by a call expression.
When bound function is called, it calls internal method [[Call]] on [[BoundTargetFunction]],
 with following arguments Call(boundThis, args). Where, boundThis is [[BoundThis]], args is
 
 [[BoundArguments]] followed by the arguments passed by the function call.

A bound function may also be constructed using the new operator: doing so acts as though 
the target function had instead been constructed. The provided this value is ignored,
 while prepended arguments are provided to the emulated function.
   */
  let user = {
    firstName: "John"
  };
  
  function func() {
    console.log(this.firstName);
  }
  
  let funcUser = func.bind(user);
  funcUser(); // John

