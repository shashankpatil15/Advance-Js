/**
 * Scheduling: setTimeout and setInterval
 */
/**
 * setTimeout allows to run a function once after the interval of time.
 * setInterval allows to run a function regularly with the interval between the runs.
 */
// let timerId = setTimeout(func|code, delay[, arg1, arg2...])
/**
 * func|code --- Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
*  delay ---- The delay before run, in milliseconds (1000 ms = 1 second).
*  arg1, arg2 ----- Arguments for the function (not supported in IE9-)
 */

/*function sayHi() {
    console.log('Hello');
  }
  
  setTimeout(sayHi, 6000);*/
  
  function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

  /****
   * Novice developers sometimes make a mistake by adding brackets () after the function:

// wrong!
setTimeout(sayHi(), 1000);
That doesn’t work, because setTimeout expects a reference to function. 
And here sayHi() runs the function, and the result of its execution is 
passed to setTimeout. In our case the result of sayHi() is undefined 
(the function returns nothing), so nothing is scheduled.
   */
  setTimeout(() => console.log('Hello'), 1000);

  /**Canceling with clearTimeout */
  let timerId = setTimeout(() => alert("never happens"), 1000);
  console.log(timerId); // timer identifier

    clearTimeout(timerId);
    console.log(timerId); // same identifier (doesn't become null after canceling)

    /***setInterval */
    // repeat with the interval of 2 seconds
let timerId = setInterval(() =>  console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId);  console.log('stop'); }, 5000);

