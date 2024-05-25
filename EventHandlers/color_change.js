//Write a JavaScript function that changes the background color of an element when a mouse enters it
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = color;
      });
    }
  }

  // Call the function with element ID and desired color
  changeBackgroundColor('myDiv', 'green');