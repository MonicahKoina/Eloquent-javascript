//Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
// Try block to handle potential errors
try {
    // Declare a constant variable undefinedObject and assign it the value undefined
    const undefinedObject = undefined;
    // Access a property of the undefined object, which will result in an error
    console.log(undefinedObject.property); // Accessing property of undefined object
  } 
  // Catch block to handle errors thrown in the try block
  catch (error) {
    // Check if the error is an instance of TypeError
    if (error instanceof TypeError) 
    {
      // Log an error message indicating property access to an undefined object
      console.log('Error: Property access to undefined object');
    } 
    // If the error is not a TypeError, rethrow the error
    else 
    {
      throw error; // Rethrow the error if it's not a TypeError
    }
  }
  