var ones = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" }
var teens = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" }
var tens = { 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" }

var getWord = function (number) {
	// Thousandth digit
	if (number == 1000) { return "onethousand"; }
	
	// Converted the int to characters to access them better.
	var word = "";
	number = number.toString();
	
	// Hundredth digit
	if (number.length == 3) {
		word += ones[number[0]] + "hundred";
		number = number.substr(1);
		if (number[0] != "0" || number[1] != "0") {
			word += "and";
		} else {
			return word;
		}
	}
	
	// Tenth digit
	if (number.length == 2) {
		if (number[0] == "1") {
			return word + teens[number];
		} else if (number[0] == "0") {
			number = number.substr(1);
		} else {
			word = word + tens[number[0]];
			number = number.substr(1);
		}
	}
	
	// Oneth digit
	if (number[0] != 0) {
		word = word + ones[number[0]];
	}
	
	return word;
}

var main = function(num) {
	var total = 0;
	for (var i = 1; i <= num; i++) {
		total += getWord(i).length;
		// console.log(getWord(i), getWord(i).length);
	}
	return total;
}

console.log(main(1000));