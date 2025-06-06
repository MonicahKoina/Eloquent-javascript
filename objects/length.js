/*
3. Object Length

Write a JavaScript program to get the length of a JavaScript object.

Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
function getLength(obj) {
    if (typeof obj === "object" && obj !== null) {
        console.log(Object.keys(obj).length)
    } else {
        console.log("This ain't an object")
    }
}
getLength(student)