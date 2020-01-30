var main = function () {
    var total = 0;
    var seen = new Set();
    for (var i = 0; i < 10000; i++) {
        for (var j = i; j < 10000; j++) {
            var temp = i * j;

            var fullString = "" + i.toString() + j.toString() + temp.toString();

            var allNums = fullString.split("").map(function(item) {
                return parseInt(item, 10);
            }).sort();

            if (allNums.length === 9) {
                var flag = 1
                for (var k = 1; k <= 9; k++) {
                    if (allNums[k - 1] !== k) {
                        flag = 0;
                    }
                }

                if (flag && !seen.has(temp)) {
                    total += temp;
                    seen.add(temp);
                }
            }
        }
    }
    return total;
};

console.log(main());
