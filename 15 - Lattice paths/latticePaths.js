
var main = function(xLength, yLength) {
	var arr = [];
	for (var i = 0; i <= xLength; i++) {
		arr.push([]);
		for (var j = 0; j <= yLength; j++) {
			arr[i].push(0);
		}
	}
	
	for (var i = 0; i <= xLength; i++) {
		for (var j = 0; j <= yLength; j++) {
			if (i == 0 && j == 0) {
				arr[i][j] = 1;
			} else if (i == 0) {
				arr[i][j] = arr[i][j - 1];
			} else if (j == 0) {
				arr[i][j] = arr[i - 1][j];
			} else {
				arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
			}
		}
	}
	return arr[xLength][yLength];
}

console.log(main(20, 20));