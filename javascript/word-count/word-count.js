'use strict';

let Words = function () {
}

Words.prototype.count = function (inputString) {
	// convert string to array of strings
	let cleanedString = inputString.trim();
	cleanedString = cleanedString.replace(/\n/, ' ').replace(/\t/, ' ').replace(/\s\s+/g, ' ');
	// cleanedString = cleanedString.replace(/\A\s+/, '');
	// cleanedString = cleanedString.replace(/\s+\Z/, '');
	// let cleanedString = inputString.replace(/\\t\\n\/, ' ');
	// let cleanedString = inputString.replace([^\\S], ' ');
	let inputArray = cleanedString.split(" ");

	// iterate through input array and add keys to new count object
	let countObject = {};

	inputArray.forEach(element => {
		// preformat all entries as lowercase
		let lowerElement = element.toLowerCase();
		// if element isn't in countObject as a number, add, else increment
		countObject[lowerElement] = !isNaN(countObject[lowerElement]) ? countObject[lowerElement] + 1 : 1;
	});

	return countObject;
}

module.exports = Words;