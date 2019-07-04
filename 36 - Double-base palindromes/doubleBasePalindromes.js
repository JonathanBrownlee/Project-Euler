var main = function(num) {
	var total = 0;
	for (var i = 1; i < num; i++) {
		var bin = i.toString(2);
		var dec = i.toString();
		if (bin == bin.split('').reverse().join('') && dec == dec.split('').reverse().join('')) {
			total += parseInt(dec);
		}
	}
	return total;
}

console.log(main(1000000));