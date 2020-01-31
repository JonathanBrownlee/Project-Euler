var main = () => {
    var total = 0;
    for (var i = 3; i < 1000000; i++) {
        var temp = i.toString()
            .split("")
            .map((item) => factorialOf(parseInt(item, 10)))
            .reduce((accumulator, currentValue) => accumulator + currentValue);
        if (i === temp) {
            console.log(i);
            total += temp;
        }
    }
    return total;
};

var factorialOf = (num) => {
    var current = 1;
    for (var i = 2; i <= num; i++)
        current = current * i;
    return current;
};

console.log(main());
