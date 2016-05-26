'use strict';

let Gigasecond = function (dateInput) {
	// input date converted to seconds
	this.storedDate = dateInput.getTime() / 1000;
	// seconds converted to gigasecond
	this.gigasecondAddition = this.storedDate + 1000000000;
	this.newDate = new Date(this.gigasecondAddition * 1000);
}

// method to return input date
Gigasecond.prototype.date = function () {
	return this.newDate;
} 

module.exports = Gigasecond;