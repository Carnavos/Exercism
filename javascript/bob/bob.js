'use strict';

var Bob = function() {};

Bob.prototype.hey = function(input) {
	
	// variables for lower and uppercase to determine tone
	let numOfLowers = 0;
	let numOfUppers = 0;

	// separate input words for separate analysis
	let inputArray = input.split(" ");

	for (let i = 0; i < inputArray.length; i++) {
		let currentWord = inputArray[i].replace(/[,-.]/, '');
		// number vs uppercase vs lowercase
		if (isNaN(currentWord) && currentWord === currentWord.toLowerCase()) { 
			numOfLowers++;
		} else if (isNaN(currentWord) && currentWord === currentWord.toUpperCase()) {
			numOfUppers++;
		}

	}
	// bob output section
	let bobText = '';
	
	// boolean conditionals
	let questioning, exclaiming, bored, silence;

	// regex to determine if input contains any non-space characters
	silence = (/\S/.test(input)) ? false : true;
	bored = (numOfLowers > numOfUppers && numOfLowers > 0 || (numOfUppers === 0 && numOfLowers === 0)) ? true : false;
	questioning = (input.slice(-1) === "?") ? true : false;

	// combination conditionals
	// questioning
	if (!silence && questioning && bored) bobText = 'Sure.';
	// bored
	if (!silence && !questioning && bored) bobText = 'Whatever.';
	// yelling
	if (!silence && !bored) bobText = 'Whoa, chill out!';
	// silence
	if (silence) bobText = 'Fine. Be that way!';

	return bobText;
};

module.exports = Bob;
