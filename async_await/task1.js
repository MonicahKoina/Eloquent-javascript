// 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. 
// Use async/await to log messages before and after the delay
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function greet() {
    console.log("before delay");
    await wait(1000)
    console.log("After the dalay")
    return "hello Alien!"
}
greet().then((value) => {
    console.log(value);
})