'use strict';

let Leap = function(year) {
	this.value = year;
};

Leap.prototype.isLeap = function () {
	return this.value % 4 === 0 && (!(this.value % 100 === 0) || this.value % 400 === 0)
};

module.exports = Leap;