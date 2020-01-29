var main = function (totalValue) {
    var count = 0;

    for (var i = 0; i <= 200; i+=200) {
        for (var j = 0; j <= 200; j += 100) {
            for (var k = 0; k <= 200; k += 50) {
                for (var l = 0; l <= 200; l += 20) {
                    for (var m = 0; m <= 200; m += 10) {
                        for (var n = 0; n <= 200; n += 5) {
                            for (var o = 0; o <= 200; o += 2) {
                                for (var p = 0; p <= 200; p += 1) {
                                    if (i + j + k + l + m + n + o + p == totalValue) {
                                        count++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return count;
}

console.log(main(200));
