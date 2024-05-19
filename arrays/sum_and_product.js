//Write a JavaScript program to compute the sum and product of an array of integers.
// Declare and initialize an array of numbers
var array = [1, 2, 3, 4, 5, 6];

// Initialize variables for sum (s) and product (p)
var s = 0;
var p = 1;

// Iterate through the array using a for loop
for (var i = 0; i < array.length; i += 1) {
  // Add the current element to the sum
  s += array[i];

  // Multiply the current element to the product
  p *= array[i];
}

// Output the calculated sum and product
console.log('Sum : ' + s + ' Product :  ' + p);