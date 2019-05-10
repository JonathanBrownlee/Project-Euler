var main = function() {

    var arr = [];

    for (var a = 2; a <= 100; a++) {
        // BigInt's precision does not work well at huge integers. 
        // This is a work around to make it more precise.
        var p = BigInt(a);
        for (var b = 1; b <= 100; b++) {
            if(b >= 2) arr.push(p);
            p = p * BigInt(a);
        }
    }

    return arr.filter(function(elem, pos) {
        return arr.indexOf(elem) == pos;
    }).length;
}

console.log(main());