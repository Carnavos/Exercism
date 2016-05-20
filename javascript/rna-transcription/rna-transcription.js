'use strict';
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (DNA) {
	
	// declare empty RNA variable	
	let RNAnucleotide = [];

	// switch statement to sort nucleotides
	for (let i = 0; i < DNA.length; i++) {
		switch (DNA[i]) {
			case "C":
				RNAnucleotide.push("G");
				break;
			case "G":
				RNAnucleotide.push("C");
				break;
			case "A":
				RNAnucleotide.push("U");
				break;
			case "T":
				RNAnucleotide.push("A");
				break;
		}
	}

	// return a joined array, leaving no commas
	return RNAnucleotide.join("");
}

module.exports = DnaTranscriber;