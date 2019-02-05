/*
    Object to primitive conversion
    To do the conversion, JavaScript tries to find and call three object methods:

Call obj[Symbol.toPrimitive](hint) if the method exists,
Otherwise if hint is "string"
try obj.toString() and obj.valueOf(), whatever exists.
Otherwise if hint is "number" or "default"
try obj.valueOf() and obj.toString(), whatever exists.

PRIMITIVE:- A property can reference an object or a primitive. Primitives are values, they have no properties. In JavaScript there are 5 primitive types: undefined , null , boolean , string and number 



*/