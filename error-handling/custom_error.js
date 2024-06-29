//Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
function divide_Numbers(n1, n2) {
    if (n2 === 0) {
      throw new Error('Error: Division by zero is not allowed.');
    }  
    return n1 / n2;
  }
  console.log(divide_Numbers(8, 3));
  console.log(divide_Numbers(8, 0));
  