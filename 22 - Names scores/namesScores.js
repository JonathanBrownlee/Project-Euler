var fs = require('fs');

var main = function () {

	var names = fs.readFileSync('names.txt', 'utf8').split(",");
	
	names.sort();

	var total = 0;

	for (var i = 0; i < names.length; i++) {
	
		names[i] = names[i].substring(1, names[i].length - 1);
		// Stripping the double quotes from the start and end of the string.
		
		var wordTotal = 0;
		for (var j = 0; j < names[i].length; j++) {
			wordTotal += names[i].charCodeAt(j) - 'A'.charCodeAt(0) + 1;
			//Getting the numeric value for each character then adding that value to the word total.
		}
		
		total += (i + 1) * wordTotal;
		//Adding the list position w/ the word total to the overall total.
	}
	
	return total;
}

console.log(main());