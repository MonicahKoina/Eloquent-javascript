//Write a JavaScript program to display the colors in the following way.
//sample
//color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"]
// Declare an array 'color' containing color names
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// Function to generate ordinal numbers (1st, 2nd, 3rd, etc.)
function Ordinal(n) {
  // Define an array 'o' for suffixes of ordinal numbers
  var o = ["th", "st", "nd", "rd"],
      x = n % 100;
  
  // Return the ordinal number with the appropriate suffix
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

// Loop through each element in the 'color' array
for (n = 0; n < color.length; n++) {
  // Calculate the ordinal number for the current position
  var ordinal = n + 1;

  // Create a string with the ordinal number, color choice, and a period
  var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

  // Output the string to the console
  console.log(output);
}