//Write a JavaScript function to check whether an 'input' is an array or not.
//Test Data:
//console.log(is_array('Education'));
//console.log(is_array([1, 2, 4, 0]));
is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('Education'));

