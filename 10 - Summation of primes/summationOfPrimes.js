function main(num) {
	var primes = [2];
	var total = 2;
	for (var i = 3; i < num; i++) {
		if (isPrime(i, primes)) {
			primes.push(i);
			total += i;
		}
	}
	console.log(total);
}

function isPrime(i, primes) {
	for (var j = 0; j < primes.length; j++) {
		if (i % primes[j] == 0) {
			return false;
		}
	}
	return true;
}

main(2000000);