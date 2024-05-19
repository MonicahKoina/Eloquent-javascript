//Write a JavaScript program that prints the elements of the following array.

//Note : Use nested for loops.
//Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//Sample Output :
//"row 0"
//" 1"
//" 2"
//" 1"
//" 24"
//"row 1"
// Declare and initialize a sample 2-D array
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Iterate through each row in the 2-D array
for (var i in a) {
   // Output the current row index
   console.log("row " + i);
   
   // Iterate through each element in the current row
   for (var j in a[i]) {
      // Output the current element value
      console.log(" " + a[i][j]);
   }
}