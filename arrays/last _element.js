//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
//Test Data :
//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2],3));
//console.log(last([7, 9, 0, -2],6));
// Function to get the last n elements of an array
var last = function(array, n) {
    // Check if the input array is null, return undefined if true
    if (array == null) 
      return void 0;
  
    // Check if the value of n is null, return the last element of the array if true
    if (n == null) 
      return array[array.length - 1];
  
    // Use the slice method to get the last n elements of the array
    // Math.max is used to ensure the starting index is not negative
    return array.slice(Math.max(array.length - n, 0));
  };
  
  // Testing the function with various cases
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2], 3));
  console.log(last([7, 9, 0, -2], 6));