/**
 * Recursion and stack
 * Que:- Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
 * Without Pow Function
 * 
 * function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log( pow(2, 3) ); // 8
 */
function pow(x, n) {
    if (n == 1) { /**f n == 1, then everything is trivial. 
      It is called the base of recursion, because it immediately
       produces the obvious result: pow(x, 1) equals x. */
      return x;
    } else {
      return x * pow(x, n - 1); /**Otherwise, we can represent pow(x, n)
       as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. 
       This is called a recursive step: we transform the task into a simpler
        action (multiplication by x) and a simpler call of the same task (pow with lower n). 
        Next steps simplify it further and further until n reaches 1. */
    }
  }
  
  console.log( pow(2, 3) ); // 8

  //shorter using ternary operator
  function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
} 

/**Recursion example using array mathods */
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 6700

/******Sum all numbers till the given one */
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert( sumTo(100) );//Using For Loop

/********************************************* */
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );//Using recursive 

/********************************************** */
function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );//using formula
/******************************************************* */
/********Calculate factorial */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
/**************************************** */
/********Fibonacci numbers */
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757
/********************************** */

/*********Link List */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);

/*********************REST and spread parameter************** */
/* When we see "..." in the code, it is either rest parameters or the spread operator.

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.
Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread operator is used to pass an array to functions that normally require a list of many arguments.
Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.*/