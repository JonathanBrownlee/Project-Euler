var main = function() {
	var largest = 0;
	
	var helper = function(leftNum, rightNum) {
		var currentNum = leftNum * rightNum;
		if (currentNum <= largest) {
			return;
		}
		if (currentNum > largest && isPalindrome(currentNum)) {
			console.log(leftNum, rightNum, currentNum, largest);
			largest = currentNum
		}
		helper(leftNum - 1, rightNum);
		helper(leftNum, rightNum - 1);
	}
	
	helper(999, 999);
	
	return largest;
}

var isPalindrome = function(num) {
	num = num.toString();
	var temp = num.split("").reverse().join("");
	return num === temp;
}


console.log("Largest Palindrome: " + main());