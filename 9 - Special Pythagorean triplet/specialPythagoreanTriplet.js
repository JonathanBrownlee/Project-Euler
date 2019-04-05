var main = function(bigNumber) {
	for (var a = 0; a < 1000; a++) {
		for (var b = 0; b < 1000; b++) {
			for (var c = 0; c < 1000; c++) {
				if (a < b && b < c && a + b + c == 1000) {
					if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
						return a * b * c;
					}
				}
			}
		}
	}
}

console.log(main());