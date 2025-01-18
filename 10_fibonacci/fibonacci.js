const fibonacci = function (n) {
	if (n < 0) {
		return 'OOPS';
	}
	n = parseInt(n);
	const phi = (1 + Math.sqrt(5)) / 2;
	const psi = (1 - Math.sqrt(5)) / 2;
	return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
};
// Do not edit below this line
module.exports = fibonacci;
