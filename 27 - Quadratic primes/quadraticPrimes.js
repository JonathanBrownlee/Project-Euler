var isPrime = function(num) {
    if (num <= 1) {
        return false;
	}
    // The check for the number 2 and 3
    if (num <= 3) {
        return true; 
	}
    if (num % 2 == 0 || num % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= num; i = i + 6) {
        if (num % i == 0 || num % (i + 2) == 0)
            return false;
    }
    return true;
}

var main = function () {
	var max = 0;
	var a = 0;
	var b = 0;
    for (var i = -1000; i < 1000; i++) {
		for (var j = -1000; j < 1000; j++) {
			var n = 0;
			while(1) {
				var temp = Math.pow(n, 2) + (n * i) + j;
				if (isPrime(temp)) {
					if (n > max) {
						max = n;
						a = i;
						b = j;
					}
				} else {
					break;
				}
				n++;
			}
		}
    }
	return a * b;
}

console.log(main());