
var main = function (sideNum) {
	var sideCount = 0;
	var numbersEachSide = 2;
	var iterationsInEdge = 0;
	var total = 1;
	for (var i = 2; i <= sideNum * sideNum; i++) {
		iterationsInEdge++;
		if (iterationsInEdge == numbersEachSide) {
			total += i;
			sideCount++;
			iterationsInEdge = 0;
		}
		if (sideCount == 4) {
			sideCount = 0;
			numbersEachSide += 2;
		}
	}
	return total;
}

console.log(main(1001));