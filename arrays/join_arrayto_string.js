//Write a simple JavaScript program to join all elements of the following array into a string.

//Expected Output:
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"
// Declaration and initialization of an array
myColor = ["Red", "Green", "White", "Black"];

// Using the toString method to convert the array to a string
console.log(myColor.toString());

// Using the default join method to concatenate array elements into a string separated by commas
console.log(myColor.join());

// Using the join method with a custom separator ('+') to concatenate array elements into a string
console.log(myColor.join('+'));