function countChar (string, ch) {
	let counted = 0;
	for (let i=0; i < string.length; i++) {
		if (string[i] == ch) {
			return counted += 1;
		}
	}
	return counted;
}
function countBs (string) {
	return countChar (string, "B");
}
console.log(countBs("BBC"));
