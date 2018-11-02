'use strict'

let user =  {
    name : "shashank",
    money : 1000,

    [Symbol.toPrimitive] (hint) {
        alert(`hint : ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);


//

const object1 = {
    [Symbol.toPrimitive] (hint) {

        if(hint == 'number') {
            return 43;
        } else if(hint == 'string') {
            return "shashank";
        } else {
            return null;
        }
    }
};
alert(+object1);

/*With the help of the Symbol.toPrimitive property
 (used as a function value), an object can be converted 
 to a primitive value. The function is called with a string
  argument hint, which specifies the preferred type of the result 
  primitive value. The hint argument can be one of "number", "string", and "default". */

  // An object without Symbol.toPrimitive property.
let obj1 = {};
alert(+obj1);     // NaN
alert(`${obj1}`); // "[object Object]"
alert(obj1 + ''); // "[object Object]"

// An object with Symbol.toPrimitive property.
let obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  }
};
alert(+obj2);     // 10        -- hint is "number"
alert(`${obj2}`); // "hello"   -- hint is "string"
alert(obj2 + ''); // "true"    -- hint is "default"


//To primitive ang toString/toNumber
let obj = {
    toString() { // toString handles all conversions in the absence of other methods
      return "2";
    }
  };
  
  alert(obj * 2); // 4, ToPrimitive gives "2", then it becomes 2

  let obj = {
    toString() {
      return "2";
    }
  };
  
  alert(obj + 2); // 22 (ToPrimitive returned string => concatenation)