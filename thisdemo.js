'use strict'

let user = {
    name : "shashank",
    age : 27,

    sayHi(){
        alert(user.name);
    }

}
user.sayHi(); 
/* But such code is unreliable. 
If we decide to copy user to another variable, 
e.g. admin = user and overwrite user with something else, 
then it will access the wrong object.*/

let user1 = {
    name1 : "Patil",
    age1 : 27,

    sayHi() {
        alert(this.name1);
    }
}
user1.sayHi();

//the same function may have different “this” when called from different objects:

let user2 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same functions in two objects
user2.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user2.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)