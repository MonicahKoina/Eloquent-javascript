//Write a JavaScript program to find the most frequent item in an array.

//Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output: a ( 5 times )
// Declare and initialize the original array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Initialize variables to track the most frequent item, its frequency, and the current item's frequency
var mf = 1;
var m = 0;
var item;

// Iterate through the array to find the most frequent item
for (var i = 0; i < arr1.length; i++) {
    // Nested loop to compare the current item with others in the array
    for (var j = i; j < arr1.length; j++) {
        // Check if the current item matches with another item in the array
        if (arr1[i] == arr1[j])
            m++;
        // Update the most frequent item and its frequency if the current item's frequency is higher
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    // Reset the current item's frequency for the next iteration
    m = 0;
}

// Output the most frequent item and its frequency
console.log(item + " ( " + mf + " times ) ");