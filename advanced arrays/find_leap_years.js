//Find the leap years in a given range of years.
// Function to generate an array of leap years within a specified range
function leap_year_range(st_year, end_year) {
    // Initialize an array 'year_range' to store all years within the range
    var year_range = [];
  
    // Loop through the years in the specified range and add them to the array
    for (var i = st_year; i <= end_year; i++) {
      year_range.push(i);
    }
  
    // Initialize a new array 'new_array' to store leap years
    var new_array = [];
  
    // Use forEach to iterate through each year in 'year_range'
    year_range.forEach(
      function(year) {
        // Call the 'test_LeapYear' function to check if the current year is a leap year
        if (test_LeapYear(year)) {
          // If it is a leap year, add it to 'new_array'
          new_array.push(year);
        }
      }
    );
  
    // Return the array of leap years
    return new_array;
  }
  
  // Function to test if a given year is a leap year
  function test_LeapYear(year) {
    // Check if the year is divisible by 4 but not divisible by 100, or if it is divisible by 100 and 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      // Return the year if it's a leap year
      return year;
    } else {
      // Return false if it's not a leap year
      return false;
    }
  }
  
  // Output the array of leap years in the range 2000 to 2012
  console.log(leap_year_range(2000, 2024));