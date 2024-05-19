// Initialize a variable 'x' with 0
var x = 0;

// Initialize an empty array
var array = Array();

// Function to add an element to the array
function add_element_to_array() {
  // Get the value from the input with id "text1" and assign it to the array at index 'x'
  array[x] = document.getElementById("text1").value;
  
  // Display an alert indicating the added element and its index
  alert("Element: " + array[x] + " Added at index " + x);
  
  // Increment the index variable 'x'
  x++;
  
  // Clear the value of the input with id "text1"
  document.getElementById("text1").value = "";
}

// Function to display the elements of the array
function display_array() {
  var e = "<hr/>"; // Initialize a string with a horizontal line

  // Iterate through the array and create a string representation of each element
  for (var y = 0; y < array.length; y++) {
    e += "Element " + y + " = " + array[y] + "<br/>";
  }
  
  // Set the innerHTML of the element with id "Result" to the generated string
  document.getElementById("Result").innerHTML = e;
}