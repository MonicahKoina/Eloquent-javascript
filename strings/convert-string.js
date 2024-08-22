/*Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Monicah Koina"));
["Monicah", "Koina"]*/


string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Monicah Koina"));