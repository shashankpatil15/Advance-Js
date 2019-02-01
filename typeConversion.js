//toString 

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

//toNumber

let str = "123";
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

//toBoolean

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
