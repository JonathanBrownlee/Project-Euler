var main = function(num, digits) {
    var current = BigInt(0), prev1 = BigInt(1), prev2 = BigInt(1);
    for (var i = 2; i < num; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
        if (current.toString().length == digits) {
            return i + 1;
        }
    }
}

console.log(main(Infinity, 1000));