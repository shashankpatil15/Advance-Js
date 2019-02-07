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
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8