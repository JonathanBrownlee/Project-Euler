var main = function (num, i) {
    var perms = getAllPerms(num).sort();
    return perms[i];
}

var getAllPerms = function (num) {
    var arr = [];

    if (num.length == 1) {
        arr.push(num);
        return num;
    }

    for (var i = 0; i < num.length; i++) {
        var first = num[i];
        var whatsLeft = num.substring(0, i) + num.substring(i + 1);
        var perms = getAllPerms(whatsLeft);
        for (var j = 0; j < perms.length; j++) {
            arr.push(first + perms[j])
        }
    }
    return arr;
}


console.log(main('0123456789', 999999)); // The millionth digit is actually 999,999th in an array