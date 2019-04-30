var main = function (num) {
	var total = BigInt(1);
	for (var i = BigInt(1); i < num; i++) {
		total *= i;
	}
	total = total.toString().split("");
	var resp = 0;
	for (var i = 0; i < total.length; i++) {
		resp += parseInt(total[i]);
	}
	return resp;
}

console.log(main(100));