var main = function() {
	var months = {
		January: 31,
		Feburary: 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31
	};
	var dayOfWeek = 1, total = 0;
	
	for (var year = 1901; year <= 2000; year++) {
		// console.log(year, year % 4, year % 100, year % 400);
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			months["Feburary"] = 29;
		} else {
			months["Feburary"] = 28;
		}
		for (var month in months) {
			/*if (month == "October") {
				return;
			}*/
			if (dayOfWeek == 6) {
				console.log(month, year);
				total++;
			}
			for (var day = 1; day <= months[month]; day++) {
				// console.log(dayOfWeek, day, month, year);
				dayOfWeek++;
				dayOfWeek = dayOfWeek % 7;
			}
		}
	}
	
	return total;
}

console.log(main());