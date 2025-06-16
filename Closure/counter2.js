/*Create a function makeMultiplier(factor) that returns another function.
The returned function should take a number and multiply it by the factor given to makeMultiplier.*/
function makeMultiplier(factor) {
    return function (n) {
        return n * factor;
    };
}
let multi = makeMultiplier(2)
console.log(multi(5))