
var main = function (num) {
	var currentTriNum = 1;
	for (var i = 2; i < Infinity; i++) {
		currentTriNum += i;
		// console.log(i, currentTriNum, divisorCount(currentTriNum));
		if (divisorCount(currentTriNum) >= num) {
			return currentTriNum;
		}
	}
}

var divisorCount = function(n) {
    if (n === 1) {
        return 1;
    }
    var divisors = 2;

    var mod = 2;
    while (mod * mod <= n) {
        if (n % mod === 0) {
            if (mod * mod < n) {
                divisors += 2;
            } 
            else {
                divisors += 1; 
            }
        }
        mod++;
    }
    return divisors;
}

console.log(main(500));