//Write a JavaScript program to shuffle an array.
// Function to shuffle an array using the Fisher-Yates algorithm
function shuffle(arra1) {
    // Initialize variables: ctr is the counter, temp is a temporary variable, index is the random index
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        
        // Decrease ctr by 1
        ctr--;
        
        // Swap the last element with the randomly picked element
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    
    // Return the shuffled array
    return arra1;
}

// Original array for testing
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Output the shuffled array
console.log(shuffle(myArray));