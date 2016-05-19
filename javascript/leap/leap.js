'use strict';

let Leap = function(year) {
	this.value = year;
};

Leap.prototype.isLeap = function () {
	return this.value % 4 === 0 && (!(this.value % 100 === 0) || this.value % 400 === 0)
};
// Leap.prototype.isLeap = function () { return this.value % 4 === 0; }

// Leap.prototype.isLeap = () => this.value % 4 === 0
// Leap.prototype.isLeap = () => true

module.exports = Leap;