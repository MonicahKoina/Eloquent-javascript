/**  Create a function createPasswordValidator(correctPassword) that returns a new function.
This returned function should:

Accept a password string.

If it’s the first call and the password matches correctPassword, return "Access granted".

If it’s the first call and the password is wrong, return "Access denied".

On any subsequent call, return "Password already used" — regardless of what password is entered.
*/
function createPasswordValidator(correctPassword) {
    let used = false;

    return function (inputPassword) {
        console.log("used is", used)
        if (used) {
            return "Password already used";
        }

        used = true;

        if (inputPassword === correctPassword) {
            return "Access granted";
        } else {
            return "Access denied";
        }
    }
}

let validate = createPasswordValidator("pass")
console.log(validate("pass"))
