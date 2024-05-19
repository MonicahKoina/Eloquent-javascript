//Write a JavaScript program to find the sum of squares of a numerical vector.
// Function to calculate the sum of squares of elements in an array
function sum_sq(array) {
    var sum = 0, // Initialize a variable to store the sum of squares
        i = array.length; // Initialize a variable with the length of the array
  
    // Iterate through the array in reverse order
    while (i--)
      // Add the square of the current element to the sum
      sum += Math.pow(array[i], 2);
  
    // Return the calculated sum of squares
    return sum;
  }
  
  // Output the result of the function with a sample array
  console.log(sum_sq([0, 1, 2, 3, 4]));