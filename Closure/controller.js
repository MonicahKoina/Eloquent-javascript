/*Create a function once(fn) that accepts a function fn, and returns a new function that can only be called once.
On the first call, it should run fn and return its result.
On any subsequent call, it should return undefined without calling fn again.*/
function once(fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            return fn();
        } return undefined;
    }

}
let greetOnce = once(() => {
    console.log("waassgudd");
});
greetOnce();
greetOnce();
