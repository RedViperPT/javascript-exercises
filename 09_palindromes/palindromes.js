const palindromes = function (strOrig) {
	const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let str = strOrig
		.toLowerCase()
		.split('')
		.filter((char) => alphanumerical.includes(char))
		.join('');

	function reverseString(str) {
		let newString = '';
		for (let i = str.length - 1; i >= 0; i--) {
			newString += str[i];
		}
		return newString;
	}
	return reverseString(str) === str;
};

// Do not edit below this line
module.exports = palindromes;
