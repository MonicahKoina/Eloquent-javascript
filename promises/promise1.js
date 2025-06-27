/* Given two promises promise1 and promise2, return a new promise.
 promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/
let promise1 = new Promise(function (resolve, reject) {
    resolve(2);
})
let promise2 = new Promise(function (resolve, reject) {
    resolve(5);
})
let promise3 = Promise.all([promise1, promise2])
    .then(([val1, val2]) => { return val1 + val2 })
    .then((ans) => { console.log("The sum is", ans) })
