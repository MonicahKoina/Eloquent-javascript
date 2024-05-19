//Write a JavaScript program to find duplicate values in a JavaScript array.
// Function to find duplicates in an array
function find_duplicate_in_array(arra1) {
    // Object to store the count of each element in the array
    var object = {};
    
    // Array to store the elements with duplicates
    var result = [];

    // Iterate through each element in the array
    arra1.forEach(function (item) {
        // Check if the element is not in the object, initialize its count to 0
        if (!object[item])
            object[item] = 0;
        
        // Increment the count of the current element
        object[item] += 1;
    })

    // Iterate through the properties of the object
    for (var prop in object) {
        // Check if the count of the element is greater than or equal to 2
        if (object[prop] >= 2) {
            // Add the element to the result array
            result.push(prop);
        }
    }

    // Return the array containing duplicate elements
    return result;
}

// Output the result of the function with a sample array
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));