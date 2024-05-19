//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
//Test Data :
//console.log(first([7, 9, 0, -2]));
//console.log(first([],3));
//console.log(first([7, 9, 0, -2],3));
//console.log(first([7, 9, 0, -2],6));
//console.log(first([7, 9, 0, -2],-3));
// Function to get the first n elements of an array
var first = function(array, n) {
    // Check if the input array is null, return undefined if true
    if (array == null)
      return void 0;
  
    // Check if the value of n is null, return the first element of the array if true
    if (n == null)
      return array[0];
  
    // Check if the value of n is negative, return an empty array if true
    if (n < 0)
      return [];
  
    // slice method to get the first n elements of the array
    return array.slice(0, n);
  };
  
  // Testing the function with various cases
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));