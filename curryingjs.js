/**
 * Currying is the process of taking a function with multiple arguments and 
 * returning a series of functions that take one argument and eventually 
 * resolve to a value.
 *//*
function volume(l, w, h) {
    return l * w * h;
  }
  
  const curried = _.curry(volume);
  
  volume(2, 3, 4); // 24
  curried(2)(3)(4); // 24
  */
 function volume1(length) {
    return function(width) {
      return function(height) {
        return height * width * length;
      }
    }
  }
  
 
  console.log( volume1(2)(3)(4)); // 24

  /**Partial Application for login */
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  askPassword(() => user.login(true), () => user.login(false));