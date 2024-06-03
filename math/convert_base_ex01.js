//Write a JavaScript function to convert a number from one base to another.
//NB : Both bases must be between 2 and 36.
//Test Data :
//console.log(base_convert('E164',16,8));
//console.log(base_convert(1000,2,8));

var base_convert = function(number, initial_base, change_base){
    if(initial_base<2 || change_base<2 || initial_base>36 || change_base>36)
        return 'base between 2 and 36'
    return parseInt(number + '', initial_base)
    .toString(change_base)
}
console.log(base_convert(1000,2,8));