var main = function(num) {
	var total = 0;
	for (var i = 0; i < num; i++) {
		if (checkAmicable(i)) {
			total += i;
		}
	}
	return total;
}

var checkAmicable = function(num) {
	var divisorTotal = getDivisorTotal(num);
	var doubleDivisor = getDivisorTotal(divisorTotal);
	return (doubleDivisor != divisorTotal && num == doubleDivisor);
}

var getDivisorTotal = function(num) {
	var divisorTotal = 1;
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			divisorTotal += i;
		}
	}
	return divisorTotal;
}

console.log(main(10000));