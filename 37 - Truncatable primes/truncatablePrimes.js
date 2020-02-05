var primes = [2, 3, 5, 7]
var arr = [];
var i = 2;

let isPrime = (num) => {
    for (var i = 0; i < primes.length; i++) {
        if (num % primes[i] === 0) {
            return false
        }
    }
    return true
}

while (arr.length < 11) {
    i++;
    if (isPrime(i)) {
        var flag = 1;
        var currentPrime = i.toString();
        primes.push(i)
        while(currentPrime.length - 1) {
            currentPrime = currentPrime.substr(1);
            if (!primes.includes(parseInt(currentPrime))) {
                flag = 0;
            }
        }
        currentPrime = i.toString();
        while(currentPrime.length - 1) {
            currentPrime = currentPrime.substring(0, currentPrime.length - 1);
            if (!primes.includes(parseInt(currentPrime))) {
                flag = 0;
            }
        }
        if (flag) {
            arr.push(i);
        }
    }
}

console.log(arr.reduce(function(a, b){
    return a + b;
}, 0));
