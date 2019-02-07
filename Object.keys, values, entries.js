/**
 * Object.keys, values, entries
 * Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  console.log( sumSalaries(salaries) ); // 650

  /******************************************
   * It’s called “destructuring assignment,” because it “destructurizes” by copying 
   * items into variables. But the array itself is not modified.
   */