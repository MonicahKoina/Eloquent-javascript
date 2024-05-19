//Write a JavaScript program to sort the items of an array.

//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8
// Declare and initialize the original array
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Declare an empty array to store the sorted result
var arr2 = [];

// Initialize variables to track the minimum, maximum, and position in the original array
var min = arr1[0];
var pos;
var max = arr1[0];

// Find the maximum value in the original array
for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) max = arr1[i];
}

// Selection sort algorithm: Iterate over the original array
for (var i = 0; i < arr1.length; i++) {
    // Iterate over the original array to find the minimum element
    for (var j = 0; j < arr1.length; j++) {
        // Check if the element is not marked as processed (not equal to "x")
        if (arr1[j] != "x") {
            // Find the minimum element and its position in the original array
            if (min > arr1[j]) {
                min = arr1[j];
                pos = j;
            }
        }
    }
    // Store the minimum element in the sorted array
    arr2[i] = min;

    // Mark the minimum element as processed by replacing it with "x" in the original array
    arr1[pos] = "x";

    // Reset min to the maximum value for the next iteration
    min = max;
}

// Output the sorted array
console.log(arr2);