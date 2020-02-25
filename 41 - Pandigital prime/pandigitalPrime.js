const main = () => {
    var max = 2;
    for (var i = 2; i < 7654322; i++) {
        if (isPrime(i) && isPandigital(i)) {
            console.log(i);
            max = i;
        }
    }
    return max;
};

primes = [];

const isPrime = (num) => {
    for (let i = 0; i < primes.length; i++) {
        if (num % primes[i] === 0 && num !== primes[i]) {
            return false;
        }
    }
    primes.push(num);
    return true;
}

const isPandigital = (num) => {
    var allNums = num.toString().split("").map(function(item) {
        return parseInt(item, 10);
    }).sort();

    for (var k = 1; k <= allNums.length; k++) {
        if (allNums[k - 1] !== k) {
            return false;
        }
    }

    return true;
}

console.log(main());
