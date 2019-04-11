var main = function () {
	var max = 0;
	var num = 0;
	for (var i = 1; i <= 1000000; i++) {
		var temp = runCollatz(i);
		// console.log(i, temp);
		if (temp > max) {
			max = temp;
			num = i;
		}
	}
	return num;
}

var runCollatz = function (num) {
	var total = 0;
	while(true) {
		if (num == 1) {
			return total;
		} else if (num % 2 == 0) {
			num = num / 2;
		} else {
			num = (num * 3) + 1;
		}
		total++;
	}
}

console.log(main());