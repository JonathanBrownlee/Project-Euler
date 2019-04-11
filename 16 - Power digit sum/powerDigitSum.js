var main = function (num) {
	// Lazy one line solution, essentailly it's just doing the power calculation and summing the digits.
	return BigInt(Math.pow(2, num)).toString().split('').reduce((partial_sum, a) => parseInt(partial_sum) + parseInt(a));
}

console.log(main(1000));