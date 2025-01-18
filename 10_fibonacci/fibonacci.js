// Binet's formula for smaller numbers
function binetFibonacci(n) {
	const phi = (1 + Math.sqrt(5)) / 2;
	return Math.round((Math.pow(phi, n) - Math.pow(1 - phi, n)) / Math.sqrt(5));
}

// Generator function for larger numbers
function* fibGenerator() {
	let a = 0,
		b = 1;
	while (true) {
		yield a;
		[a, b] = [b, a + b];
	}
}

// Combined function with input validation
function fibonacci(input) {
	// Parse input to number and validate
	const n = parseInt(input);

	// Check for negative numbers or NaN
	if (isNaN(n) || n < 0) {
		return 'OOPS';
	}

	if (n < 70) {
		return binetFibonacci(n);
	}

	// Use generator for larger numbers
	const gen = fibGenerator();
	let result;
	for (let i = 0; i <= n; i++) {
		result = gen.next().value;
	}
	return result;
}
// Do not edit below this line
module.exports = fibonacci;
