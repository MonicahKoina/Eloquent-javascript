/*
Write a JavaScript program to list the properties of a JavaScript object.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/
let student = {
    id: "XEF02/4332/2025",
    name: "Monicah",
    age: 23
}
function displayKeys(obj) {
    if (typeof obj === "object" && obj !== null) {
        console.log(Object.keys(obj))
    } else {

        console.log("Not an object")
    }
}
displayKeys(student);
