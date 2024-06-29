//Write a JavaScript function that takes a number as a parameter and throws a custom error if the number is not an integer
//Define a funtion named named valindInteger which takes the parameter 'number'
function valindInteger(number){
    //check if the number given is not an integer
    //i have used the Number.isInteger method to check if the number is an integer
    if(!Number.isInteger(number)){
        //if the number is not an integer give throw the error message to be displayed
        throw new error('Invalid number.Please input an integer.')
    }
    //log a message indicating that the number is valid
    console.log('Number is valid:', number);
}
//usage
//call a validInteger function with number 12
try{
    valindInteger(12);
    valindInteger(1.2);
}
//catch any errors thrown by the validIntegerfunction and log the error message
catch(error){
    console.log("Error:", error.message);
}