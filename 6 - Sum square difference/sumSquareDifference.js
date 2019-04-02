var main = function(num) {
	var sumTotal = 1;
	var sqrTotal = 1;
	for (var i = 2; i <= num; i++) {
		sumTotal += i;
		sqrTotal += Math.pow(i, 2);
		console.log(Math.pow(sumTotal, 2), sqrTotal, Math.pow(sumTotal, 2) - sqrTotal);
	}
}

main(100);