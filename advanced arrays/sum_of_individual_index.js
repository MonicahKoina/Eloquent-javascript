//There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
//Sample array:
//array1 = [1,0,2,3,4];
//array2 = [3,5,6,7,8,13]
// Function to calculate the sum of corresponding elements from two arrays
function Arrays_sum(array1, array2) {
    // Initialize an empty array to store the sum of corresponding elements
    var result = [];
  
    // Initialize counters for iterating through the arrays
    var ctr = 0;
    var x = 0;
  
    // Check if array1 is empty, return an error message if true
    if (array1.length === 0)
      return "array1 is empty";
  
    // Check if array2 is empty, return an error message if true
    if (array2.length === 0)
      return "array2 is empty";
  
    // Iterate through arrays until the end of either array is reached
    while (ctr < array1.length && ctr < array2.length) {
      // Calculate the sum of corresponding elements and push it to the result array
      result.push(array1[ctr] + array2[ctr]);
      // Increment the counter
      ctr++;
    }
  
    // Check if array1 is exhausted
    if (ctr === array1.length) {
      // Append the remaining elements from array2 to the result array
      for (x = ctr; x < array2.length; x++) {
        result.push(array2[x]);
      }
    } else {
      // Append the remaining elements from array1 to the result array
      for (x = ctr; x < array1.length; x++) {
        result.push(array1[x]);
      }
    }
  
    // Return the resulting array
    return result;
  }
  
  // Output the result of the function with sample arrays
  console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));