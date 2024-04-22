#!/usr/bin/env node

let size = 8;
let board = " ";
for (let y=0; y < 8; y++) {
	for (let x = 0; x < 8; x++) {
		if((x+y) %2 == 0) {
			return board += " ";
		} else {
			return board = "#"
		}
	}
		board = "\n"
}
console.log(board)
