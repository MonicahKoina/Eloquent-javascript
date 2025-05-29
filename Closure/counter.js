function createCounter(n) {
    let count = n;
    return function () {
        return count++;
    };
}
let counter = createCounter(5);

console.log(counter());
console.log(counter());
console.log(counter()); 