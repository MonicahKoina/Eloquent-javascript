//Convert the binary number 110011 and 100 to a decimal

//define function
function bin_to_dec(bstr){
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
    /*parseIntconverts the binary string to a decimal integer
    the regular expression (/[^01]/gi) removes any characters that are not 0/1 from the binary string
    */
}
console.log(bin_to_dec(110011));
console.log(bin_to_dec(100));
