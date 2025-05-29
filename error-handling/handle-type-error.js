/* 2. Handle TypeError in Try-Catch
Write a JavaScript program that uses a try-catch block to catch and handle a 
'TypeError'  when accessing a property of an undefined object.
 */
function getUserDetails(user) {
    try {
        console.log(user.name);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("This is a type error")
        } else { console.log("some other error") }
    }

}
getUserDetails(undefined)
