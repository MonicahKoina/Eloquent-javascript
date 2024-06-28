// Assigning values to variables
var x = 3;
var y = -7;
var z = 2;

// Function to determine the sign based on the input value
function getSign(value) {
  if (value > 0) {
    return "+";
  } else if (value < 0) {
    return "-";
  } else {
    return "zero";
  }
}

// Checking the sign for each variable
var signX = getSign(x);
var signY = getSign(y);
var signZ = getSign(z);

// Determining the overall sign based on individual signs
var overallSign = (signX === signY && signY === signZ) ? "+" : "-";

// Displaying the result
console.log("The sign is " + overallSign); 