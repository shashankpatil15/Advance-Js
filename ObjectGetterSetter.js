/**
 * Property getters and setters
 * Two kinds of Property
 * 1. Data properties
 * 2. Accessor properties :- Accessor properties are only accessible with get/set
 * 
 */
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
  console.log(user.name); // Alice
  console.log(user.surname); // Cooper

  /**
   * Accessor Descriptor
   */
  let user = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  console.log(user.fullName); // John Smith
  
  for(let key in user) alert(key); // name, surname
  