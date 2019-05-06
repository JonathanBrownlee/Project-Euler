// This is an inefficient solution. Executes in O(n^3) time. I'd like to find a better one in the future.
var main = function (num) {
    var abundants = [];
    for (var i = 0; i < num; i++) {
        if (checkAbundant(i)) { abundants.push(i); }
    }
    var total = 0;
    for (var k = 0; k < num; k++) {
        var flag = 0;
        for (var i = 0; i < abundants.length; i++) {
            for (var j = 0; j < abundants.length; j++) {
                if (abundants[i] + abundants[j] == k) {
                    flag = 1;
                    break;
                }
            }
            if (flag) { break; }
        }
        if (!flag) { total += k; }
    }
    return total;
}

var checkAbundant = function(num) {
    var total = 0;
    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            total += i;
        }
    }
    return total > num;
}

console.log(main(30000));