#!/usr/bin/node
for(let x=1; 1<=100; x++){
	output = " ";
	if (x%3 == 0) output += "Fizz";
	if(x%5 ==0) output += "Buzz";
	console.log(output || x);
}
