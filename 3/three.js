let arr = [1, 2, 4, 5, 6, 5];

// filters through array
// checks the number against its index
// logs a dupe

const findDupes = arr => {
	return arr.filter((num, index) => {
		if (arr.indexOf(num) >= index) {
		} else {
			console.log('dupes ' + num);
		}
	});
};

findDupes(arr);
