function isStringEmpty(text) {
	var isStringEmpty = false;
	if (text == 'undefined' || text == "") {
		isStringEmpty = true;
	} else {
		isStringEmpty = false;
	}
	return isStringEmpty;
}

function encodeText(text) {
	return encodeURIComponent(text);
}

function getInt(text) {
	return parseInt(text);
}

/**
 * Getting URL string for terminal overview
 * 
 * @returns {String}
 */
function getTerminalOverviewURL() {
	// ID of the Google Spreadsheet
	// var spreadsheetID = "1ewBmzFcBnckxb1YR_gIPdZHcwwlpwh8ZHwTTtQvc8to";
	var spreadsheetID = "1z9-QMkYGW4Y8vzNocVAG03cHksSJ0glPUaD_Z3GwnFM";// medialab
	return getUrl(spreadsheetID);

}

function terminalOverviewURL() {
	// return
	// 'https://googledrive.com/host/0Bwxm6XF3WWbfS2Nqb2xlWXRaUGs/terminaloverview.html';
	return 'https://googledrive.com/host/0B9H5QAJejxVqSDMxcE9SSzc5bUk/terminaloverview.html';// medialab

}

/**
 * Orange PAX list URL
 * 
 * @returns {String}
 */
function getOrangePaxIstURL() {
	// var spreadsheetID = "1jTU9Z3NBsaf8gWAYCTyV1Cd8fzCDQHU0bHfoEaSp8xo";
	var spreadsheetID = "1CVf2tqwv75_UitBabl7Q1YvVSNBYEBPN7uVrWmFmLZU";// medialab
	return getUrl(spreadsheetID);
}

/**
 * Connected flights basic data
 * 
 * @returns {String}
 */
function getScreen2Url() {
	// ID of the Google Spreadsheet
	// var spreadsheetID = "1my11Chxlmw3ld1IvMGqbn1_-IhA3lg7d9XnRCAfTd7k";
	var spreadsheetID = "1CulDk8HF7lXhIPsuflUM6WCLfH6OZpyxb_YDKXUqHeM";// medialab
	return getUrl(spreadsheetID);
}

/**
 * Orange PAX Arriving flight list
 * 
 * @returns {String}
 */
function getConnectionFlightWithOrangPaxUrl() {
	// var spreadsheetID = '1f0P0zv2aM0aXtfx3-6Gprv99KRRMZ44_LnJr0tWtCMc';
	var spreadsheetID = '1FnfO-5NGLBqL549rRsj7X1CNnLEoviJhN4zyuTJzTVQ';// medialab
	return getUrl(spreadsheetID);
}

/**
 * Red PAX Arriving flight list
 * 
 * @returns {String}
 */
function getConnectionFlightWithRedPaxUrl() {
	// var spreadsheetID = '1upqW1Oo1GADO0ixSN7Kf_mn7LbFyB2EBD3vbDdHO-2A';
	var spreadsheetID = '11s43sp-28MJPqh_nHxsYkBtudoal8d61RT-kAWnS3ho';// medialab
	return getUrl(spreadsheetID);
}

function getUrl(spreadSheetID) {
	return "https://spreadsheets.google.com/feeds/list/" + spreadSheetID
			+ "/od6/public/values?alt=json";
}

function getProgressValue(ct, dt) {
	var equalsValue = (dt - ct) / (1000 * 60);
	return (equalsValue * 10) / 9;
}

function isCondToShowFlight(dataEntry, currentTimestamp) {
	var showFlightStatus = false;
	if ((getInt(dataEntry.gsx$departingtime.$t) >= getInt(currentTimestamp))
			&& ((getInt(dataEntry.gsx$departingtime.$t) - getInt(currentTimestamp)) <= 90 * 60 * 1000)) {
		showFlightStatus = true;
	} else {
		showFlightStatus = false;
	}

	return showFlightStatus;
}
function settingImage(id, img) {
	if (img.indexOf('assets/') > -1) {
		img.replace('assets/', '');
	}
	var element = document.getElementById(id);
	$("#" + id).attr("src",
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/' + img);
}

function setCheckboxValue(id, value) {
	var element = document.getElementById(id);
	element.checked = value;
	// element.disabled = 'false';
}

function settingContent(id, text) {
	$('#' + id).html(text);
}