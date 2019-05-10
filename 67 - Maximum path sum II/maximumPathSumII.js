var fs = require('fs');

var main = function() {
	
	// Read from text file
	var triangle = fs.readFileSync('triangle.txt', 'utf8').split(",")[0].split("\n");
	for (var i = 0; i < triangle.length; i++) { triangle[i] = triangle[i].split(" "); }
	
	// Convert all the values to int.
	for (var i = 0; i < triangle.length; i++) {
		for (var j = 0; j < triangle[i].length; j++) {
			triangle[i][j] = parseInt(triangle[i][j]);
		}
	}
	
	for (var i = triangle.length - 2; i >= 0; i--) {
		for (var j = 0; j < triangle[i].length; j++) {
			triangle[i][j] = triangle[i][j] + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
		}
	}
	
	console.log(triangle[0][0]);
}

main();