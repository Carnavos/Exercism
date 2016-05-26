'use strict';

let Words = function () {
}

Words.prototype.count = function (inputString) {
	// convert string to array of strings
	let inputArray = inputString.split(" ");

	// iterate through input array and add keys to new count object
	let countObject = {};

	inputArray.forEach(element => countObject[element.toLower()] = (countObject[element.toLower()]) ? countObject[element.toLower()] + 1 : 1);

	return countObject;
}

module.exports = Words;