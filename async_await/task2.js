//. Using async/await, log "One", then after 1 second log "Two",
// then "Three" after another 2 seconds.
//  No setTimeout outside of promises
function time(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}
async function countDown() {
    console.log("One")
    await time(2000);
    console.log("Two")
    await time(3000);
    console.log("Three")
    return "DONE";
}
countDown().then((value) => {
    console.log(value)
})