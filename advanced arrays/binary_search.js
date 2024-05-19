//Write a JavaScript program to perform a binary search.
//A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
//sample array:
//var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Function to perform binary search on a sorted array
function binary_Search(items, value) {
    // Initialize variables for the first, last, and middle indices of the array
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    // Continue the search while the middle element is not equal to the target value
    // and the first index is less than the last index
    while (items[middleIndex] != value && firstIndex < lastIndex) {
        // Adjust the search range based on whether the target value is less or greater than the middle element
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        // Recalculate the middle index for the next iteration
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    // Return the index of the target value if found, otherwise return -1
    return (items[middleIndex] != value) ? -1 : middleIndex;
}

// Sorted array for testing
var items = [1, 2, 3, 4, 5, 7, 8, 9];

// Perform binary search for the target values 1 and 5
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));