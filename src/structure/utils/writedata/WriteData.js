//var CLIENT_ID = '558907879587-o0fvnuppfel2s8ml3jq10nulabdb74e8.apps.googleusercontent.com';
var CLIENT_ID = '855700685602-7m7ueq4hhjgfcrmufgmcesk5jrkiughd.apps.googleusercontent.com';
var isResultDisplayed = false;
// For reading data
// var SCOPES = [ "https://www.googleapis.com/auth/spreadsheets.readonly" ];

// For writing data
var SCOPES = [ "https://www.googleapis.com/auth/spreadsheets" ];
var isAuthorizedToWrite = false;

/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
	// console.log('checkAuth');
	gapi.auth.authorize({
		client_id : CLIENT_ID,
		scope : SCOPES.join(' '),
		immediate : true
	}, handleAuthResult);
}

/**
 * Handle response from authorization server.
 * 
 * @param {Object}
 *            authResult Authorization result.
 */
function handleAuthResult(authResult) {
	// console.log(authResult);
	if (authResult && !authResult.error) {
		isAuthorizedToWrite = true;
	} else {
		isAuthorizedToWrite = false;
		return;
	}
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 * 
 * @param {Event}
 *            event Button click event.
 */
function handleAuthClick(event) {
	gapi.auth.authorize({
		client_id : CLIENT_ID,
		scope : SCOPES,
		immediate : false
	}, handleAuthResult);
	return false;
}
var value, spreadSheetRange, spreadSheetId, majorDimension, tag;
/**
 * Load Sheets API client library.
 */
var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
function loadSheetsApi(value1, spreadSheetRange1, spreadSheetId1,
		majorDimension1, tag1) {
	// console.log(isAuthorizedToWrite);
	if (isAuthorizedToWrite == true) {
		value = value1;
		spreadSheetRange = spreadSheetRange1;
		spreadSheetId = spreadSheetId1;
		majorDimension = majorDimension1;
		tag = tag1;
		// console.log(tag);
		if (tag == 'READ') {
			gapi.client.load(discoveryUrl).then(readData);
		} else if (tag == 'WRITE' || tag == 'WRITE_CANCEL'
				|| tag == 'WRITE_NPS_RESULT') {
			// console.log(value);
			gapi.client.load(discoveryUrl).then(writeData);
		} else if (tag == 'READ_WRITE') {
			gapi.client.load(discoveryUrl).then(readData);
		} else if (tag == 'WRITE_READ') {
			gapi.client.load(discoveryUrl).then(writeData);
		} else {
			return;
		}
	} else {
		return;
	}
}
var tagResultScreen, rangeResult;
function loadResultSheetApi() {
	if (isAuthorizedToWrite == true) {
		// console.log('AUSTH SUCC');
		gapi.client.load(discoveryUrl).then(readResultData);
	} else {
		// console.log('AUSTH FAIL');
		// checkAuth();
		return;
	}
}

function readResultData() {
	gapi.client.sheets.spreadsheets.values.get({
		// spreadsheetId : '110qP9HBHRa1rJBEE0zdAIuQkPFko53v00K47NLk-Su0',
		spreadsheetId : '1L_pTMQJDy-00Z7uuUjPsRCJ2pMOrhM3JRcryQFezALM',// medialab
		range : rangeResult,
	}).then(function(response) {
		// console.log(response);
		if (tagResultScreen == 'BOTTOM_LINE') {
			tagResultScreen = 'WOULD_RECOMMEND';
			rangeResult = 'WB!B11:E11';
			settingBottomLineData(response);
		} else if (tagResultScreen == 'WOULD_RECOMMEND') {
			// console.log(response);
			tagResultScreen = 'NPS';
			rangeResult = 'WB!B19:E19';
			settingWBData(response);
		} else if (tagResultScreen == 'NPS') {
			// console.log(response);
			tagResultScreen = 'BOTTOM_LINE';
			rangeResult = 'Game1!A2:B16';
			settingNpsData(response);
		}
		// readResultData();

		setTimeout('readResultData();', 1000);
	}, function(response) {
		console.log(response);
		setTimeout('readResultData("UAUA");', 3000);
	});

}

function writeData() {
	gapi.client.sheets.spreadsheets.values
			.update({
				spreadsheetId : spreadSheetId,
				range : spreadSheetRange,
				majorDimension : majorDimension,
				values : value,
				valueInputOption : 'USER_ENTERED'
			})
			.then(
					function(response) {
						// console.log(response);
						if (tag == 'WRITE_READ') {
							gapi.client.load(discoveryUrl).then(readData);
						} else if (tag == 'WRITE_RESULT') {
							var orangePax = document
									.getElementById('orangePaxText_' + idX).innerHTML;
							var x = orangePax.replace(
									'<font size="6%" color="orange"> <b>', '');
							var y = x.replace('</b></font>', '');
							tag = 'WRITE_NPS_RESULT';
							majorDimension = 'ROWS';
							value = [ [ groupName, '$' + y * groupCost ] ];
							// spreadSheetId =
							// '110qP9HBHRa1rJBEE0zdAIuQkPFko53v00K47NLk-Su0';
							spreadSheetId = '1L_pTMQJDy-00Z7uuUjPsRCJ2pMOrhM3JRcryQFezALM';// medialab
							spreadSheetRange = groupRange;
							isResultDisplayed = true;
							// connectedFlightListItem_LIN_C11
							writeData();
						} else if (tag == 'WRITE_CANCEL') {
							document.getElementById('connectedFlightListItem_'
									+ idX).style.display = 'none';
							tag = 'WRITE_NPS_RESULT';

							writeData();
						} else if (tag == 'WRITE_NPS_RESULT') {
							tag = '';
							// majorDimension = 'COLUMNS';
							// spreadSheetRange = npsGroupRange;
							// value = wrValue;
							// data = dataNpsScore;
							// spreadSheetId =
							// '110qP9HBHRa1rJBEE0zdAIuQkPFko53v00K47NLk-Su0';
							spreadSheetId = '1L_pTMQJDy-00Z7uuUjPsRCJ2pMOrhM3JRcryQFezALM';// medialab
							isResultDisplayed = true;
							writeNPSscore();
						} else {
							if (isResultDisplayed == true) {
								document
										.getElementById('connectedFlightListItem_'
												+ idX).style.display = 'none';
								isResultDisplayed = false;
							} else {
								// console.log('FOUND IT');
								return;
							}
						}
					}, function(response) {
						console.log(response);
					});
}

function writeNPSscore() {
	gapi.client.sheets.spreadsheets.values.batchUpdate({
		spreadsheetId : spreadSheetId,
		// range : spreadSheetRange,
		// majorDimension : majorDimension,
		data : [ {
			majorDimension : 'ROWS',
			range : npsGroupRange,
			values : wrValue
		}, {
			majorDimension : 'ROWS',
			range : npsScoreGroupRange,
			values : npsScoreValue
		} ],
		valueInputOption : 'USER_ENTERED'
	})
			.then(
					function(response) {
						// console.log(response);
						if (isResultDisplayed == true) {
							document.getElementById('connectedFlightListItem_'
									+ idX).style.display = 'none';
							isResultDisplayed = false;
						} else {
							// console.log('FOUND IT');
							return;
						}
					}, function(response) {
						console.log(response);
					});
}

function readData() {
	gapi.client.sheets.spreadsheets.values
			.get({
				spreadsheetId : toSpreadSheetID,
				range : sheetNameTO,
			})
			.then(
					function(response) {
						// console.log(response);
						var orangePax = document
								.getElementById('orangePaxText_' + idX).innerHTML;
						var x = orangePax.replace(
								'<font size="6%" color="orange"> <b>', '');
						var y = x.replace('</b></font>', '');
						var toValue = response.result.values[0];
						var z = toValue - y;
						spreadSheetId = toSpreadSheetID;
						spreadSheetRange = 'Sheet1!I1:I6';
						tag = 'WRITE_RESULT';
						value = [ [ null, null, null, null, null, z ] ];
						majorDimension = 'COLUMNS';
						writeData();
					}, function(response) {
						console.log(response);
					});
}