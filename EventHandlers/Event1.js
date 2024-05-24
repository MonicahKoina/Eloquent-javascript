//Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.
//solution
//create a button element using .createElement

const button = document.createElement('button');
//set its content to click me
button.textContent = "click me";
//add a click listener to the button
button.addEventListener('click' , function(){
    console.log("Button clicked");
});
//append the document to the body using the appendChild method so that it becomes visible to the page
document.body.appendChild(button);

