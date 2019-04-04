
var main = function(num) {
	var primes = [2];
	for (var i = 3; i < Infinity; i++) {
		if (isPrime(primes, i)) {
			primes.push(i);
		} 
		if (primes.length == num) {
			return primes[primes.length - 1];
		}
	}
}

var isPrime = function(primes, num) {
	for (var i = 0; i < primes.length; i++) {
		if (num % primes[i] == 0) {
			return false;
		}
	}
	return true;
}

console.log(main(10001));