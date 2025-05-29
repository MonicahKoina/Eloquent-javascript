/** 1. Throw Error for Non - Integer
 Write a JavaScript function that takes a number as a parameter
 and throws a custom 'Error' if the number is not an integer.
 **/
function checkNumber(number) {
    try {
        if (!Number.isInteger(number)) {
            throw new Error(`This is not an integer. Your number is: ${number}`);
        }
        console.log("Your number is an integer.");
    } catch (err) {
        console.error("Error found:", err.message);
    }
}

checkNumber(89.9);
