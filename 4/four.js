//spaces don't do well and are read as words

function count() {
	//get text from input and split by new lines
	const text = document.getElementById('text').value.split('\n');
	// get
	let line = 2;
	let word = 3;
	let vowel = 2;

	let firstPass = [];
	let lines = [];
	let words = [];
	let finalResults = [];

	//iterate through lines
	//use line -1 in order to make sure we push the proper line to our first pass array
	//push the proper lines to the first pass array to hold
	console.log(text);
	for (let i = line - 1; i < text.length; i += line) {
		firstPass.push(text[i]);
	}
	console.log(firstPass);
	//for each index of lines it now splits them into their sub array of words
	firstPass.forEach(newLine => lines.push(newLine.split(' ')));

	//for each line since they are subarrays we iterate over te top to get to the sub arrays
	// for each sub array then we must iterate over them. Similiar to line -1 we use word -1 to make sure we include the words we are looking for and push them to the new array. lines[i][j] indicates at which subarray index we push a word to the words array
	for (let i = 0; i < lines.length; i++) {
		for (let j = word - 1; j <= lines[i].length; j += word) {
			words.push(lines[i][j]);
		}
	}
	console.log('words', words);

	//iterates through the words array
	// makes sure they are not undefined. Issue happens if there is not a even numbers of words in the array to satisfy every 3 words. for example if there were 5 words it creates an undefined word.
	//then iterates through the array of words and checks to see if any of their letters match vowels. If they do and more match than the number of set vowels we push the result to our final results array.
	for (let i = 0; i < words.length; i++) {
		if (words != undefined) {
			if (words.match(/([aeiouAEIOU])/g).length >= vowel) {
				finalResults.push(words[i]);
			}
		}
	}
	console.log('finalResults', finalResults);
}
