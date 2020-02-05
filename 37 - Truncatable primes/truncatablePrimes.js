var primes = [2, 3, 5, 7];
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
        var leftTruncate = i.toString();
        var rightTruncate = i.toString();
        primes.push(i)
        while(leftTruncate.length - 1) {
            leftTruncate = leftTruncate.substr(1);
            if (!primes.includes(parseInt(leftTruncate))) {
                flag = 0;
            }
            rightTruncate = rightTruncate.substring(0, rightTruncate.length - 1);
            if (!primes.includes(parseInt(rightTruncate))) {
                flag = 0;
            }
        }
        if (flag) {
            arr.push(i);
        }
    }
}

console.log(arr.reduce((a, b) => a + b, 0));
