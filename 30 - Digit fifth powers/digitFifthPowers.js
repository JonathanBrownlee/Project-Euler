var main = function () {
	var total = 0;
	var lim = 1000000;
	// I found the limit of a million to be sufficient for this question, 
	// however an arbitrary upper limit is generally not good practice.
	for (var i = 2; i < lim; i++) {
		var temp = i.toString().split("");
		var tempTotal = 0
		for (var j = 0; j < temp.length; j++) {
			tempTotal += Math.pow(parseInt(temp[j]), 5);
		}
		if (tempTotal == i) {
			total += i;
		}
	}
	return total;
}

console.log(main());