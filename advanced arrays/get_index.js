//Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

//Test Data :
//([2, NaN, 8, 16, 32]) -> [1]
//([2, 4, NaN, 16, 32, NaN]) -> [2,5]
//([2, 4, 16, 32]) ->[]
// Function to find all indexes of NaN in an array
function test(arr_nums){
    // Use map to create an array of indexes where NaN is found, otherwise return false
    return arr_nums.map(function(el, i){
        if(isNaN(el)) 
          return i;
        return false;
    })
    // Use filter to remove falsy values (non-NaN elements)
    .filter(function(el){
        return el;
    });
}

// Test the function with an array containing NaN at multiple indexes
arr_nums = [2, NaN, 8, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

// Test the function with another array containing NaN at multiple indexes
arr_nums = [2, 4, NaN, 16, 32, NaN];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);

// Test the function with an array without NaN
arr_nums = [2, 4, 16, 32];
console.log("Original array: "+arr_nums);
result = test(arr_nums);
console.log("Find all indexes of NaN in the said array: "+result);