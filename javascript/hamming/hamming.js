'use strict';

var Hamming = function() {};

Hamming.prototype.compute = function(firstStrand, secondStrand) {
	// length of both strings hopefully
	let strandLength = firstStrand.length;
	let distance = 0;
	// up until strandLength, determine if letter is the same. if not, increase difference
	for (let i = 0; i < strandLength) {
		if (firstStrand[i] !== secondStrand[i]) {
			distance++;
		}
	}
	return distance;
};

module.exports = Hamming;
