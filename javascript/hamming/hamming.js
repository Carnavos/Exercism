'use strict';

var Hamming = function() {};

Hamming.prototype.compute = function(firstStrand, secondStrand) {
	// length of both strings hopefully
	if (firstStrand.length !== secondStrand.length) {
		throw new Error('DNA strands must be of equal length.');
	}
	let strandLength = firstStrand.length;
	let distance = 0;
	// up until strandLength, determine if letter is the same. if not, increase difference
	for (let i = 0; i < strandLength; i++) {
		if (firstStrand[i] !== secondStrand[i]) {
			distance++;
		}
	}

	return distance;
};

module.exports = Hamming;
