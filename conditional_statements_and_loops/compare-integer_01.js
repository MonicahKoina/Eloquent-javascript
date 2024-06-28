// Function to compare two numbers and return the larger one or a message for equality
function compareNumbers(num1, num2) {
    if (num1 > num2) {
      return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
    } else if (num2 > num1) {
      return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
    } else {
      return "The values " + num1 + " and " + num2 + " are equal.";
    }
  }
  
  var result = compareNumbers(5, 8);
  console.log(result);
