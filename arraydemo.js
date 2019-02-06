/*
    Arrays
    Declaration
    let arr = new Array();
    let arr = [];

    // mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
........................................
//Trailing comma

let fruits = [
  "Apple",
  "Orange",
  "Plum",
];

...................................................
Methods pop/push, shift/unshift
For stacks, the latest pushed item is received first, that’s also called LIFO 
(Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you 
to add/remove elements both to/from the beginning or the end.
/************ Methods push/pop run fast, while shift/unshift are slow.
 

Loops:-

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

OR.................

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

................................................
Que:- Difference between for..in and for...of

...................................................................................
Que:- Is array copied?

.........................................................
**************************Array methods********************************************

How to delete an element from the array?

delete arr[1]; 

****************************Splice*******************************************
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

**************************slice**********************************
let str = "test";
let arr = ["t", "e", "s", "t"];

alert( str.slice(1, 3) ); // es
alert( arr.slice(1, 3) ); // e,s

alert( str.slice(-2) ); // st
alert( arr.slice(-2) ); // s,t

*************************concat**************************************
forEach() executes the provided callback once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

callback is invoked with three arguments:

the element value
the element index
the array being traversed

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

******************Searching in array*********************************************************
indexOf/lastIndexOf and includes

arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

************find and findIndex***********
let result = arr.find(function(item, index, array) {
  // should return true if the item is what we are looking for
});

**************Filter*****************
filter() calls a provided callback function once for each element in an array,
 and constructs a new array of all the values for which callback returns a value 
 that coerces to true.

 ****************MAP*********************************
  map builds a new array, using it when you aren't using the returned array is an anti-pattern
  let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
})

***********sort(fn)**************
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr (and returns it)
arr.sort();

alert( arr );  // 1, 15, 2

*********************reverse******************
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
********split and join***************
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}




*/