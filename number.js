/* All numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision”.

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 ); 

/..........................
1e3 = 1 * 1000
1.23e6 = 1.23 * 1000000
/.................................
let ms = 1e-6; //  0.000001;
/.............................................
Methods:-

toString(base):- 
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

base=36 is the maximum, digits can be 0..9 or A..Z.
alert( 123456..toString(36) ); // 2n9c

/.........................................................
	Math.floor	Math.ceil	Math.round	Math.trunc
3.1	   3	        4	        3	        3
3.6	   3	        4	        4           3
-1.1  -2	        -1	        -1      	-1
-1.6  -2	        -1	        -2	        -1
/.....................................................................
let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

/...............
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
/......................................
 64 bits to store a number: 52 of them are used to store the digits, 
 11 of them store the position of the decimal point (they are zero for integer numbers), and 
 1 bit is for the sign.

 console.log(0.1+0.2);
 alert( 0.1 + 0.2 == 0.3 );
/....................................................................
A number is stored in memory in its binary form, a sequence of ones and zeroes. 
But fractions like 0.1, 0.2 that look simple in the decimal numeric system are 
actually unending fractions in their binary form.

In other words, what is 0.1? It is one divided by ten 1/10, one-tenth. In decimal
 numeral system such numbers are easily representable. Compare it to one-third: 1/3.
  It becomes an endless fraction 0.33333(3).

So, division by powers 10 is guaranteed to work well in the decimal system, but 
division by 3 is not. For the same reason, in the binary numeral system, the division 
by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, 
just like there is no way to store one-third as a decimal fraction.

The numeric format IEEE-754 solves this by rounding to the nearest possible number.
 These rounding rules normally don’t allow us to see that “tiny precision loss”,
  so the number shows up as 0.3. But beware, the loss still exists.
/.......................................................................

Solution:- Rounded :- 
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30 toFixed always returns a string
/...............................................................
// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000

/...............................................................
Two zeroes
Another funny consequence of the internal representation 
of numbers is the existence of two zeroes: 0 and -0.

That’s because a sign is represented by a single bit, so 
every number can be positive or negative, including a zero.

In most cases the distinction is unnoticeable, because operators 
are suited to treat them as the same.

/................................................................................
isNaN:- 
isNaN(value) converts its argument to a number and then tests it for being NaN
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
/.................................................................

isFinite:- 
isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

/.......................................................................................
Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:

 alert( +"100px" ); // NaN
 /..............................
 alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
/..............................................................................................
parseInt(str, radix)
    alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
/.......................................................................
Math.random()
alert( Math.random() ); 
alert( Math.random() ); 
alert( Math.random() ); 
....................................
Math.max(a, b, c...) / Math.min(a, b, c...)
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
.................................................
Math.pow(n, power)
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024


*/
console.log(9999999999999999 );
console.log(0.1 + 0.2);

console.log(2+1/2);
