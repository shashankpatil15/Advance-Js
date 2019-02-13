/**
 * Error handling, "try..catch"
 * try {
  // code...
    } catch (err) {
  // error handling
    }
 */
try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    console.log('End of try (never reached)');  // (2)
  
  } catch(err) {
  
    console.log(`Error has occured!`); // (3) <--
  
  }
  
  console.log("...Then the execution continues");

  /**try..catch only works for runtime errors */
  /**try..catch works synchronously */
  /**
   * try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  console.log( "won't work" );
}
   */
  setTimeout(function() {
    try {
      noSuchVariable; // try..catch handles the error!
    } catch (e) {
        console.log( "error is caught here!" );
    }
  }, 1000);


  /**Error object 
   * name-------Error name For an undefined variable that’s "ReferenceError".
   * message ---Textual message about error details. There are other non-standard 
     properties available in most environments. One of most widely used and supported is:
   * stack ------- Current call stack: a string with information about the sequence 
   of nested calls that led to the error. Used for debugging purposes.
  */
 try {
    lalala; // error, variable is not defined!
  } catch(err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at ...  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
  }
/** If json is malformed, JSON.parse generates an error, so the script “dies”.*/
 // let json = '{ "name":"John", "age": 30 }';
 let json = "{ bad json }";
 try {
 
   let user = JSON.parse(json); // <-- when an error occurs...
   alert( user.name ); // doesn't work
 
 } catch (e) {
   // ...the execution jumps here
   alert( "Our apologies, the data has errors, we'll try to request it one more time." );
   alert( e.name );
   alert( e.message );
 }

 /**Catch should only process errors that it knows and “rethrow” all others. */
 let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // rethrow (*)
  }

}

/**try…catch…finally */
try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }

  /**Variables are local inside try..catch..finally */
  
