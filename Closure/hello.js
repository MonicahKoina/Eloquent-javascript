//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function helloWorld() {
    return function sayHello() {
        console.log("Hello world");
    }
}
let createHelloWorld = helloWorld()
createHelloWorld();
createHelloWorld();