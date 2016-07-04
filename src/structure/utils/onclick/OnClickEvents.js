var isRedPaxFilterClicked = false, isOrangePaxListEnabled = false, isAccordinClicked = false, isFlighLandedClicked = false, isFlighNotLandedClicked = false;
function onGateElementClick(dataEntry) {
	var id = 'baseDiv_' + dataEntry.gsx$boardinggate.$t;
	var baseDiv = document.getElementById(id);

	baseDiv.addEventListener('click', function(event) {
		var connectedFlightsURL = dataEntry.gsx$connectedflights.$t;
		console.log(connectedFlightsURL);
		if (connectedFlightsURL != '') {
			window.location.replace(connectedFlightsURL);
		} else {
			return;
		}
	});
}

function openScreen2(redirectURL) {
	window.location.replace(redirectURL);
}

// Screen 2 orange filter click
function onOrangeFilterClick() {
	var orangePaxFilterId = 'buttonStatusOrange_';
	var orangePaxFilter = document.getElementById(orangePaxFilterId);
	orangePaxFilter.addEventListener('click', function(event) {
		isRedPaxFilterClicked = false;
		isOrangePaxListEnabled = true;
		isFlighLandedClicked = false;
		isFlighNotLandedClicked = false;
		var url = getConnectionFlightWithOrangPaxUrl();
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;
			deletePaxList();
			createConnectingFlightList(entry, 'ORANGE_PAX');
			settingListItem(entry, 'ORANGE_PAX');
			// onFlightFilterClick('ORANGE_PAX');
			for (var i = 0; i < entry.length; i++) {
				var dataEntry = entry[i];
				listItemClick(dataEntry);
				paxListViewClick(dataEntry);
			}
		});
	});
}

/**
 * 
 */
function onRedFilterClick() {
	var redPaxFilterId = 'buttonStatusRed_';
	var redPaxFilter = document.getElementById(redPaxFilterId);
	redPaxFilter.addEventListener('click', function(event) {
		isRedPaxFilterClicked = true;
		isOrangePaxListEnabled = false;
		isFlighLandedClicked = false;
		isFlighNotLandedClicked = false;
		var url = getConnectionFlightWithRedPaxUrl();
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;
			deletePaxList();
			createConnectingFlightList(entry, 'RED_PAX');
			settingListItem(entry, 'RED_PAX');
			// onFlightFilterClick('RED_PAX');
			for (var i = 0; i < entry.length; i++) {
				var dataEntry = entry[i];
				listItemClick(dataEntry);
				paxListViewClick(dataEntry);
				onGateNumberClick();
			}
		});
	});
}

function listItemClick(dataEntry) {
	var arrGateNo = dataEntry.gsx$arrterminal.$t;
	var accordinID = 'arrivalTerminal_' + arrGateNo;
	var accordin = document.getElementById(accordinID);
	accordin.addEventListener('click', function(event) {
		var x = document.getElementById('accordinContent_' + arrGateNo);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
			isAccordinClicked = true;
			hide('optionBaseDiv_', arrGateNo);
		} else {
			x.className = x.className.replace(" w3-show", "");
			isAccordinClicked = false;
			show('optionBaseDiv_', arrGateNo)
		}
	});
}

function onCancelClick() {
	document.getElementById('cancel_').addEventListener('click',
			function(event) {
				var orangePaxList = document.getElementById('paxList_');
				orangePaxList.style.display = "none";
			});
}

function paxListViewClick(dataEntry) {
	var arrGateNo = dataEntry.gsx$arrterminal.$t;
	var paxListID = 'paxListImage_' + arrGateNo;
	var paxList = document.getElementById(paxListID);
	paxList.addEventListener('click', function(event) {
		var url = getOrangePaxIstURL();
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;

			var orangePaxID = document.getElementById('orangePaxText_'
					+ arrGateNo);
			var orangePaxText = orangePaxID.innerHTML;
			orangePaxText = orangePaxText.replace(
					'<font size="6%" color="orange"> <b>', '');
			orangePaxText = orangePaxText.replace('</b></font>', '');
			var shuffledList = shuffle(entry);
			if (shuffledList.length > orangePaxText) {
				for (var i = 0; i < shuffledList.length; i++) {
					if (i > orangePaxText) {
						shuffledList.splice(i, 1);
					}
				}
			}
			createOrangePaxList(shuffledList);
			var orangePaxList = document.getElementById('paxList_');
			orangePaxList.style.display = "block";
			setOrangePaxData(shuffledList);
		});
	});
}

function hide(hideView, id) {
	hideDisplayView(document.getElementById(hideView + id));
}

function show(showView, id) {
	showDisplayView(document.getElementById(showView + id));
}

function onFlightNotLandedFilterClick() {
	var flightNotLandedID = 'buttonFlightsNotLanded_';
	var flightNotLandedElement = document.getElementById(flightNotLandedID);
	flightNotLandedElement.addEventListener('click', function(event) {
		if (isRedPaxFilterClicked == false) {
			console.log('YOYOYO');
			isFlighLandedClicked = false;
			isFlighNotLandedClicked = true;
			var url = getConnectionFlightWithOrangPaxUrl();
			$.getJSON(url, function(data) {
				var entry = data.feed.entry;
				for (var i = 0; i < entry.length; i++) {
					var dataEntry = entry[i];
					var isFlightLanded = dataEntry.gsx$isflightlanded.$t;
					if (isFlightLanded == 'TRUE') {
						entry.splice(i, 1);
					}
				}
				deletePaxList();
				createConnectingFlightList(entry, 'FLIGHT_NOT_LANDED');
				settingListItem(entry, '');
				for (var i = 0; i < entry.length; i++) {
					var dataEntry = entry[i];
					listItemClick(dataEntry);
					paxListViewClick(dataEntry);
				}
			});
		} else {
			return;
		}
	});

}

function onFlightFilterClick() {
	onFlightLandedFilterClick();
	onFlightNotLandedFilterClick();
}

function onFlightLandedFilterClick() {
	var flightLandedID = 'buttonFlightsLanded_';
	var flightLandedElement = document.getElementById(flightLandedID);
	flightLandedElement.addEventListener('click', function(event) {
		isFlighLandedClicked = true;
		isFlighNotLandedClicked = false;
		var url = getConnectionFlightWithOrangPaxUrl();
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;
			for (var i = 0; i < entry.length; i++) {
				var dataEntry = entry[i];
				var isFlightLanded = dataEntry.gsx$isflightlanded.$t;
				if (isFlightLanded == 'FALSE') {
					entry.splice(i, 1);
				}
			}
			deletePaxList();
			createConnectingFlightList(entry, 'FLIGHT_LANDED');
			settingListItem(entry, '');
			for (var i = 0; i < entry.length; i++) {
				var dataEntry = entry[i];
				listItemClick(dataEntry);
				paxListViewClick(dataEntry);
			}
		});
	});
}

function onGateNumberClick() {
	var gateNumberID = 'buttonGateNumber_';
	var gateNumberElement = document.getElementById(gateNumberID);
	// $(document).on('click', gateNumberElement, function() {
	// alert($(this).text() + 'and the binding worked :)');
	// });
	// $(gateNumberElement).on('click', 'div.clickable', function() {
	// var url = terminalOverviewURL();
	// window.location.replace(url);
	// });
	gateNumberElement.addEventListener('click', function(event) {
		// console.log('YOYO');
		// alert("onGateElementClick");
		var url = terminalOverviewURL();
		window.location.replace(url);
	});
}

function checkBoxMAC(element) {
	disableCheckBox(element, 'Do you want to send Meet-and-Connect agent?', 0);
}

function checkBoxOneFourth(element) {
	disableCheckBox(
			element,
			'A quarter of the game has passed, do you want to delay the flight?',
			1);
}

function checkBoxCallDPM(element) {
	disableCheckBox(element,
			'Do you want to open another line at Passport Control?', 2);

}

function checkBoxThirdFourth(element) {
	disableCheckBox(
			element,
			'Three quarters of the game has passed, do you want to delay the flight?',
			3);
}

function checkBoxLastCall(element) {
	disableCheckBox(element, 'Do you want to make a Last Call for these Pax?',
			4);
}
var wrValue, dataNpsScore, dataNpsScoreCellID = 12, npsScoreValue;

function getNpsScoreMacValue(elementID) {
	var value = 0;
	if (elementID.indexOf('MAD_C12') > -1) {
		value = 10;
	} else if (elementID.indexOf('TRD_A04') > -1) {
		value = 15;
	} else if (elementID.indexOf('LIN_C11') > -1) {
		value = 20;
	} else if (elementID.indexOf('FCO_D78') > -1) {
		value = 15;
	}
	return value;
}
function disableCheckBox(element, text, tagNumber) {
	// console.log(element);
	if (confirm(text)) {
		if (element.checked) {
			var elementID = element.id;
			if (elementID != undefined
					&& elementID.indexOf('statusCheck_1') > -1) {
				document.getElementById('statusCheck_1_' + 'MAD_C12').disabled = 'true';
				document.getElementById('statusCheck_1_' + 'TRD_A04').disabled = 'true';
				document.getElementById('statusCheck_1_' + 'LIN_C11').disabled = 'true';
				document.getElementById('statusCheck_1_' + 'FCO_D78').disabled = 'true';

				document.getElementById('statusCheck_1_' + 'MAD_C12').checked = true;
				document.getElementById('statusCheck_1_' + 'TRD_A04').checked = true;
				document.getElementById('statusCheck_1_' + 'LIN_C11').checked = true;
				document.getElementById('statusCheck_1_' + 'FCO_D78').checked = true;
			} else if (elementID != undefined
					&& elementID.indexOf('statusCheck_2') > -1) {
				document.getElementById('statusCheck_2_' + 'MAD_C12').disabled = 'true';
				document.getElementById('statusCheck_2_' + 'TRD_A04').disabled = 'true';
				document.getElementById('statusCheck_2_' + 'LIN_C11').disabled = 'true';
				document.getElementById('statusCheck_2_' + 'FCO_D78').disabled = 'true';

				document.getElementById('statusCheck_2_' + 'MAD_C12').checked = true;
				document.getElementById('statusCheck_2_' + 'TRD_A04').checked = true;
				document.getElementById('statusCheck_2_' + 'LIN_C11').checked = true;
				document.getElementById('statusCheck_2_' + 'FCO_D78').checked = true;
			} else if (elementID != undefined
					&& elementID.indexOf('statusCheck_3') > -1) {
				document.getElementById('statusCheck_3_' + 'MAD_C12').disabled = 'true';
				document.getElementById('statusCheck_3_' + 'TRD_A04').disabled = 'true';
				document.getElementById('statusCheck_3_' + 'LIN_C11').disabled = 'true';
				document.getElementById('statusCheck_3_' + 'FCO_D78').disabled = 'true';

				document.getElementById('statusCheck_3_' + 'MAD_C12').checked = true;
				document.getElementById('statusCheck_3_' + 'TRD_A04').checked = true;
				document.getElementById('statusCheck_3_' + 'LIN_C11').checked = true;
				document.getElementById('statusCheck_3_' + 'FCO_D78').checked = true;
			} else {
				element.disabled = 'true';
			}

			var sheetName = 'Game1!';
			// var resultSpreadSheetID =
			// '110qP9HBHRa1rJBEE0zdAIuQkPFko53v00K47NLk-Su0';
			var resultSpreadSheetID = '1L_pTMQJDy-00Z7uuUjPsRCJ2pMOrhM3JRcryQFezALM'; // medialab
			var majorDimension = 'ROWS';
			var tag = 'WRITE_NPS_RESULT', values;
			switch (tagNumber) {
			// MAC CALL
			case 0:
				var macValue, macNpsScoreValue;
				if (macSelected == 0) {
					macValue = '$500';
					macNpsScoreValue = getNpsScoreMacValue(elementID);
				} else if (macSelected == 1) {
					macValue = '$1000';
					macNpsScoreValue = getNpsScoreMacValue(elementID);
				} else {
					macValue = '$0';
					macNpsScoreValue = 0;
				}

				if (elementID != undefined) {
					if (elementID.indexOf('MAD_C12') > -1) {
						settingImage('statusImage_' + tagNumber + '_MAD_C12',
								'mac_icon_c.png');
						settingImage(ID_CALLING_MAC + 'MAD_C12',
								'mac_icon_c.png');
						npsGroupRange = 'WB!B2';
						// wrValue = [ [ 1 ] ];
						wrValue = [ [ 1.5 ] ];
						npsScoreGroupRange = 'WB!B12';
						npsScoreValue = [ [ macNpsScoreValue ] ];

						var flightStatusTimeRaw = getFlightStatusTime(0);
						// console.log(flightStatusTimeRaw);
						settingContent(ID_FLIGHT_STATUS_TIME + 'MAD_C12',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, false, true, 0));
					} else if (elementID.indexOf('TRD_A04') > -1) {
						settingImage('statusImage_' + tagNumber + '_TRD_A04',
								'mac_icon_c.png');
						settingImage(ID_CALLING_MAC + 'TRD_A04',
								'mac_icon_c.png');
						npsGroupRange = 'WB!C2';
						// wrValue = [ [ 1 ] ];
						wrValue = [ [ 1.5 ] ];
						npsScoreGroupRange = 'WB!C12';
						npsScoreValue = [ [ macNpsScoreValue ] ];
						var flightStatusTimeRaw = getFlightStatusTime(1);
						// console.log(flightStatusTimeRaw);
						settingContent(ID_FLIGHT_STATUS_TIME + 'TRD_A04',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, false, true, 1));
					} else if (elementID.indexOf('LIN_C11') > -1) {
						settingImage('statusImage_' + tagNumber + '_LIN_C11',
								'mac_icon_c.png');
						settingImage(ID_CALLING_MAC + 'LIN_C11',
								'mac_icon_c.png');
						npsGroupRange = 'WB!D2';
						// wrValue = [ [ 1 ] ];
						wrValue = [ [ 1.5 ] ];
						npsScoreGroupRange = 'WB!D12';
						npsScoreValue = [ [ macNpsScoreValue ] ];
						var flightStatusTimeRaw = getFlightStatusTime(2);
						// console.log(flightStatusTimeRaw);
						settingContent(ID_FLIGHT_STATUS_TIME + 'LIN_C11',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, false, true, 2));
					} else if (elementID.indexOf('FCO_D78') > -1) {
						settingImage('statusImage_' + tagNumber + '_FCO_D78',
								'mac_icon_c.png');
						settingImage(ID_CALLING_MAC + 'FCO_D78',
								'mac_icon_c.png');
						npsGroupRange = 'WB!E2';
						// wrValue = [ [ 1 ] ];
						wrValue = [ [ 1.5 ] ];
						npsScoreGroupRange = 'WB!E12';
						npsScoreValue = [ [ macNpsScoreValue ] ];
						var flightStatusTimeRaw = getFlightStatusTime(3);
						// console.log(flightStatusTimeRaw);
						settingContent(ID_FLIGHT_STATUS_TIME + 'FCO_D78',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, false, true, 3));
					}
				}

				values = [ [ 'MAC - ' + ++macSelected, '-' + macValue ] ];
				var idCell = getCellID();
				loadSheetsApi(values, sheetName + 'A' + idCell + ':B' + idCell,
						resultSpreadSheetID, majorDimension, tag);
				break;
			// 1/4
			case 1:
				if (elementID != undefined) {
					if (elementID.indexOf('MAD_C12') > -1) {
						npsGroupRange = 'WB!B3';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B13:E13';
						npsScoreValue = [ [ -5, null, null, null ] ];
						var flightStatusTimeRaw = getFlightStatusTime(0);
						settingContent(ID_FLIGHT_STATUS_TIME + 'MAD_C12',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										true, false, false, 0));
					} else if (elementID.indexOf('TRD_A04') > -1) {
						npsGroupRange = 'WB!C3';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B13:E13';
						npsScoreValue = [ [ null, -5, null, null ] ];

						var flightStatusTimeRaw = getFlightStatusTime(1);
						settingContent(ID_FLIGHT_STATUS_TIME + 'TRD_A04',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										true, false, false, 1));
					} else if (elementID.indexOf('LIN_C11') > -1) {
						npsGroupRange = 'WB!D3';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B13:E13';
						npsScoreValue = [ [ null, -5, null, null ] ];

						var flightStatusTimeRaw = getFlightStatusTime(2);
						settingContent(ID_FLIGHT_STATUS_TIME + 'LIN_C11',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										true, false, false, 2));
					} else if (elementID.indexOf('FCO_D78') > -1) {
						npsGroupRange = 'WB!E3';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B13:E13';
						npsScoreValue = [ [ null, null, null, -5 ] ];
						var flightStatusTimeRaw = getFlightStatusTime(3);
						settingContent(ID_FLIGHT_STATUS_TIME + 'FCO_D78',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										true, false, false, 3));
					}
				}
				settingImage('statusImage_1_' + 'MAD_C12', '14_c.png');
				settingImage('statusImage_1_' + 'TRD_A04', '14_c.png');
				settingImage('statusImage_1_' + 'LIN_C11', '14_c.png');
				settingImage('statusImage_1_' + 'FCO_D78', '14_c.png');
				settingImage(ID_ONE_FOURTH_DELAY + 'MAD_C12', '14_c.png');
				settingImage(ID_ONE_FOURTH_DELAY + 'TRD_A04', '14_c.png');
				settingImage(ID_ONE_FOURTH_DELAY + 'LIN_C11', '14_c.png');
				settingImage(ID_ONE_FOURTH_DELAY + 'FCO_D78', '14_c.png');
				var idCell = getCellID();
				values = [ [ '1/4 Delay', '-$500' ] ];
				loadSheetsApi(values, sheetName + 'A' + idCell + ':B' + idCell,
						resultSpreadSheetID, majorDimension, tag);
				break;
			// DPM
			case 2:
				if (elementID != undefined) {
					if (elementID.indexOf('MAD_C12') > -1) {
						npsGroupRange = 'WB!B4';
						// wrValue = [ [ 0 ] ];
						wrValue = [ [ 0.5 ] ];
						npsScoreGroupRange = 'WB!B14';
						npsScoreValue = [ [ 5 ] ];
					} else if (elementID.indexOf('TRD_A04') > -1) {
						npsGroupRange = 'WB!C4';
						// wrValue = [ [ 0 ] ];
						wrValue = [ [ 0.5 ] ];
						npsScoreGroupRange = 'WB!C14';
						npsScoreValue = [ [ 5 ] ];
					} else if (elementID.indexOf('LIN_C11') > -1) {
						npsGroupRange = 'WB!D4';
						// wrValue = [ [ 0 ] ];
						wrValue = [ [ 0.5 ] ];
						npsScoreGroupRange = 'WB!D14';
						npsScoreValue = [ [ 5 ] ];
					} else if (elementID.indexOf('FCO_D78') > -1) {
						npsGroupRange = 'WB!E4';
						// wrValue = [ [ 0 ] ];
						wrValue = [ [ 0.5 ] ];
						npsScoreGroupRange = 'WB!E14';
						npsScoreValue = [ [ 5 ] ];
					}
				}
				settingImage('statusImage_2_' + 'MAD_C12', 'sec_c.png');
				settingImage('statusImage_2_' + 'TRD_A04', 'sec_c.png');
				settingImage('statusImage_2_' + 'LIN_C11', 'sec_c.png');
				settingImage('statusImage_2_' + 'FCO_D78', 'sec_c.png');
				settingImage(ID_SEC_CHECK_PT + 'MAD_C12', 'sec_c.png');
				settingImage(ID_SEC_CHECK_PT + 'TRD_A04', 'sec_c.png');
				settingImage(ID_SEC_CHECK_PT + 'LIN_C11', 'sec_c.png');
				settingImage(ID_SEC_CHECK_PT + 'FCO_D78', 'sec_c.png');
				var idCell = getCellID();
				values = [ [ 'Passport Controll', '-$500' ] ];
				loadSheetsApi(values, sheetName + 'A' + idCell + ':B' + idCell,
						resultSpreadSheetID, majorDimension, tag);
				break;
			// 3/4
			case 3:
				if (elementID != undefined) {
					if (elementID.indexOf('MAD_C12') > -1) {
						npsGroupRange = 'WB!B5';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B15:E15';
						npsScoreValue = [ [ -10, null, null, null ] ];
						var flightStatusTimeRaw = getFlightStatusTime(0);
						settingContent(ID_FLIGHT_STATUS_TIME + 'MAD_C12',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, true, false, 0));
					} else if (elementID.indexOf('TRD_A04') > -1) {
						npsGroupRange = 'WB!C5';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B15:E15';
						npsScoreValue = [ [ null, -10, null, null ] ];
						var flightStatusTimeRaw = getFlightStatusTime(1);
						settingContent(ID_FLIGHT_STATUS_TIME + 'TRD_A04',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, true, false, 1));
					} else if (elementID.indexOf('LIN_C11') > -1) {
						npsGroupRange = 'WB!D5';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B15:E15';
						npsScoreValue = [ [ null, null, -10, null ] ];
						var flightStatusTimeRaw = getFlightStatusTime(2);
						settingContent(ID_FLIGHT_STATUS_TIME + 'LIN_C11',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, true, false, 2));
					} else if (elementID.indexOf('FCO_D78') > -1) {
						npsGroupRange = 'WB!E5';
						wrValue = [ [ 0 ] ];
						npsScoreGroupRange = 'WB!B15:E15';
						npsScoreValue = [ [ null, null, null, -10 ] ];
						var flightStatusTimeRaw = getFlightStatusTime(3);
						settingContent(ID_FLIGHT_STATUS_TIME + 'FCO_D78',
								setRevisedFlightStatusTime(flightStatusTimeRaw,
										false, true, false, 3));
					}
				}
				settingImage('statusImage_' + tagNumber + '_MAD_C12',
						'34_c.png');
				settingImage('statusImage_' + tagNumber + '_TRD_A04',
						'34_c.png');
				settingImage('statusImage_' + tagNumber + '_LIN_C11',
						'34_c.png');
				settingImage('statusImage_' + tagNumber + '_FCO_D78',
						'34_c.png');
				settingImage(ID_THREE_FOURTH_DELAY + 'MAD_C12', '34_c.png');
				settingImage(ID_THREE_FOURTH_DELAY + 'TRD_A04', '34_c.png');
				settingImage(ID_THREE_FOURTH_DELAY + 'LIN_C11', '34_c.png');
				settingImage(ID_THREE_FOURTH_DELAY + 'FCO_D78', '34_c.png');
				var idCell = getCellID();
				values = [ [ '3/4 Delay', '-$700' ] ];
				loadSheetsApi(values, sheetName + 'A' + idCell + ':B' + idCell,
						resultSpreadSheetID, majorDimension, tag);
				break;
			// Last Call
			case 4:
				if (elementID != undefined) {
					if (elementID.indexOf('MAD_C12') > -1) {
						settingImage('statusImage_' + tagNumber + '_MAD_C12',
								'lc_c.png');
						settingImage(ID_LAST_CALL + 'MAD_C12', 'lc_c.png');
						npsGroupRange = 'WB!B6';
						wrValue = [ [ 1 ] ];
						npsScoreGroupRange = 'WB!B16';
						npsScoreValue = [ [ 4 ] ];
					} else if (elementID.indexOf('TRD_A04') > -1) {
						settingImage('statusImage_' + tagNumber + '_TRD_A04',
								'lc_c.png');
						settingImage(ID_LAST_CALL + 'TRD_A04', 'lc_c.png');
						npsGroupRange = 'WB!C6';
						wrValue = [ [ 1 ] ];
						npsScoreGroupRange = 'WB!C16';
						npsScoreValue = [ [ 8 ] ];
					} else if (elementID.indexOf('LIN_C11') > -1) {
						settingImage('statusImage_' + tagNumber + '_LIN_C11',
								'lc_c.png');
						settingImage(ID_LAST_CALL + 'LIN_C11', 'lc_c.png');
						npsGroupRange = 'WB!D6';
						wrValue = [ [ 1 ] ];
						npsScoreGroupRange = 'WB!D16';
						npsScoreValue = [ [ 12 ] ];
					} else if (elementID.indexOf('FCO_D78') > -1) {
						settingImage('statusImage_' + tagNumber + '_FCO_D78',
								'lc_c.png');
						settingImage(ID_LAST_CALL + 'FCO_D78', 'lc_c.png');
						npsGroupRange = 'WB!E6';
						wrValue = [ [ 1 ] ];
						npsScoreGroupRange = 'WB!E16';
						npsScoreValue = [ [ 8 ] ];
					}
				}
				var idCell = getCellID();
				values = [ [ 'Last Call - ' + ++lastCallTag, '-$200' ] ];
				// loadSheetsApi(values, sheetName + 'A6:B6',
				// resultSpreadSheetID,
				// majorDimension, tag);
				loadSheetsApi(values, sheetName + 'A' + idCell + ':B' + idCell,
						resultSpreadSheetID, majorDimension, tag);
				break;

			default:
				break;
			}
		}
	} else {
		element.checked = false;
	}

}

function setRevisedFlightStatusTime(flightStatusTimeRaw, oneQuater,
		threeQuater, mac, tag) {
	var eta = flightStatusTimeRaw[0];
	var rct = flightStatusTimeRaw[1];
	var cdct = flightStatusTimeRaw[2];
	if (oneQuater == true && threeQuater == false && mac == false) {
		eta = ++eta;
	} else if (oneQuater == false && threeQuater == true && mac == false) {
		eta = ++eta;
	} else if (oneQuater == false && threeQuater == false && mac == true) {
		rct = --rct;
	}
	cdct = rct - eta;
	// var flightStatusTime = '<font id = "flightStatusTime_eta_rct_'
	// + tag
	// + '"'
	// + 'class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
	// + eta
	// + ' Rounds'
	// + '<br>RCT - '
	// + rct
	// + ' Rounds'
	// + '</font><font id = "flightStatusTime_cdct_'
	// + tag
	// + '"'
	// + 'class="w3-text-orange" size="2" style="vertical-align:
	// middle;"><br>CDCT - '
	// + cdct + ' Rounds' + '</font>';
	var flightStatusTime = '<font id = "flightStatusTime_eta_rct_'
			+ tag
			+ '"'
			+ 'class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
			+ eta + ' Rounds' + '<br>RCT - ' + rct + ' Rounds'
			+ '</font><font id = "flightStatusTime_cdct_' + tag + '"';
	if (cdct < 0) {
		flightStatusTime = flightStatusTime
				+ 'class="w3-text-green" size="2" style="vertical-align: middle;"><br>CDCT - '
				+ cdct + ' Rounds' + '</font>';
	} else {
		flightStatusTime = flightStatusTime
				+ 'class="w3-text-orange" size="2" style="vertical-align: middle;"><br>CDCT - '
				+ cdct + ' Rounds' + '</font>';
	}

	return flightStatusTime;
}

function getFlightStatusTime(tag) {
	// ETA - 10 Rounds<br>RCT - 12 Rounds
	// OnClickEvents.js:357 <br>CDCT - 2 Rounds
	var etaRctRaw = document.getElementById('flightStatusTime_eta_rct_' + tag).innerHTML;
	var cdctRaw = document.getElementById('flightStatusTime_cdct_' + tag).innerHTML;

	etaRctRaw = etaRctRaw.replace("ETA - ", "");
	etaRctRaw = etaRctRaw.replace(" Rounds<br>RCT - ", ",");
	etaRctRaw = etaRctRaw.replace(" Rounds", "");
	etaRctRaw = etaRctRaw.split(",");

	cdctRaw = cdctRaw.replace("<br>CDCT - ", "");
	cdctRaw = cdctRaw.replace(" Rounds", "");

	return [ etaRctRaw[0], etaRctRaw[1], cdctRaw ];
}

function onInfoClick(element, text) {
	var msg;
	switch (text) {
	case 0:
		msg = 'Send a Meet-and-Connect agent to the PAX to help them with transferring.\n\n'
				+ 'All dice throws +1\n\n'
				+ 'MaC - 1: $500\n'
				+ 'MaC - 2: $1000';
		break;
	case 1:
		msg = 'When everyone has passed a quarter of the game you can delay the flight by one round.\n\n'
				+ 'All PAX groups +1 round\n\n' + '1/4 Delay: $500';
		break;
	case 2:
		msg = 'Call the floor manager to open another line at passport control.\n\n'
				+ '+1 line at passport control\n\n' + 'Passport Control: $500';
		break;
	case 3:
		msg = 'When everyone has passed three quarters of the game you can delay the flight by one round.\n\n'
				+ 'All PAX groups +1 round\n\n' + '3/4 Delay: $700';
		break;
	case 4:
		msg = 'Call your PAX to the gate, make them aware they are about to miss their flight.\n\n'
				+ 'One PAX group gets +1 round\n\n' + 'Last Call: $200';
		break;

	default:
		break;
	}
	alert(msg);
}
var valueRead = 0, sheetNameTO = 'Sheet1!I6', toSpreadSheetID = '1z9-QMkYGW4Y8vzNocVAG03cHksSJ0glPUaD_Z3GwnFM';
var idX, groupName, groupCost, npsGroupRange, npsScoreGroupRange;
function onBoardingDoneClick(element) {
	var sheetName = 'Sheet1!';
	var resultSpreadSheetID = '1FnfO-5NGLBqL549rRsj7X1CNnLEoviJhN4zyuTJzTVQ';
	var majorDimension = 'ROWS';
	var tagWriteRead = 'WRITE_READ';
	var values;// [ [ tag, value ] ],
	switch (element.id) {
	case 'boardingDone_MAD_C12':
		var idCell = getCellID();
		groupName = 'ELDERLY';
		groupCost = 100;
		// groupRange = 'Game1!A7:B7';
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		idX = 'MAD_C12';
		values = [ [ 'prmValue', 'indiValue', 'hcCnxValue' ], [ '0', '0', '0' ] ];
		npsGroupRange = 'WB!B7';
		wrValue = [ [ 1 ] ];
		npsScoreGroupRange = 'WB!B17';
		npsScoreValue = [ [ 2 ] ];
		loadSheetsApi(values, sheetName + 'AJ1:AL3', resultSpreadSheetID,
				majorDimension, tagWriteRead);
		break;
	case 'boardingDone_TRD_A04':
		var idCell = getCellID();
		groupName = 'FAMILY';
		// groupRange = 'Game1!A8:B8';
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		groupCost = 100;
		idX = 'TRD_A04';
		values = [ [ 'prmValue', 'indiValue', 'hcCnxValue' ], [],
				[ '0', '0', '0' ] ];
		npsGroupRange = 'WB!C7';
		wrValue = [ [ 1 ] ];
		npsScoreGroupRange = 'WB!C17';
		npsScoreValue = [ [ 4 ] ];
		loadSheetsApi(values, sheetName + 'AJ1:AL3', resultSpreadSheetID,
				majorDimension, tagWriteRead);

		break;
	case 'boardingDone_LIN_C11':
		var idCell = getCellID();
		groupName = 'SINGLES';
		groupCost = 100;
		// groupRange = 'Game1!A9:B9';
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		idX = 'LIN_C11';
		values = [ [ 'prmValue', 'indiValue', 'hcCnxValue' ], [], [],
				[ '0', '0', '0' ] ];
		npsGroupRange = 'WB!D7';
		wrValue = [ [ 1 ] ];
		npsScoreGroupRange = 'WB!D17';
		npsScoreValue = [ [ 6 ] ];
		loadSheetsApi(values, sheetName + 'AJ1:AL4', resultSpreadSheetID,
				majorDimension, tagWriteRead);
		break;
	case 'boardingDone_FCO_D78':
		var idCell = getCellID();
		groupName = 'HIGH YIELD';
		groupCost = 200;
		// groupRange = 'Game1!A10:B10';
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		idX = 'FCO_D78';
		values = [ [ 'prmValue', 'indiValue', 'hcCnxValue' ], [], [], [],
				[ '0', '0', '0' ] ];
		npsGroupRange = 'WB!E7';
		wrValue = [ [ 1 ] ];
		npsScoreGroupRange = 'WB!E17';
		npsScoreValue = [ [ 4 ] ];
		loadSheetsApi(values, sheetName + 'AJ1:AL5', resultSpreadSheetID,
				majorDimension, tagWriteRead);
		break;

	default:
		break;
	}
}

function onBoardingCancelClick(element) {
	// var sheetName = 'Sheet1!';
	var resultSpreadSheetID = '1L_pTMQJDy-00Z7uuUjPsRCJ2pMOrhM3JRcryQFezALM';
	var majorDimension = 'ROWS';
	var tagWrite = 'WRITE_CANCEL';
	var values;
	switch (element.id) {
	case 'cantBoard_MAD_C12':
		idX = 'MAD_C12';
		var orangePax = document.getElementById('orangePaxText_' + idX).innerHTML;
		var x = orangePax.replace('<font size="6%" color="orange"> <b>', '');
		var y = x.replace('</b></font>', '');

		var idCell = getCellID();
		groupName = 'ELDERLY';
		groupCost = 100;
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		npsGroupRange = 'WB!B8';
		wrValue = [ [ -2 ] ];
		values = [ [ groupName, '-$' + y * groupCost ] ];
		npsScoreGroupRange = 'WB!B18';
		npsScoreValue = [ [ -10 ] ];
		loadSheetsApi(values, groupRange, resultSpreadSheetID, majorDimension,
				tagWrite);
		break;
	case 'cantBoard_TRD_A04':
		idX = 'TRD_A04';
		var orangePax = document.getElementById('orangePaxText_' + idX).innerHTML;
		var x = orangePax.replace('<font size="6%" color="orange"> <b>', '');
		var y = x.replace('</b></font>', '');
		var idCell = getCellID();
		groupName = 'FAMILY';
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		groupCost = 100;
		values = [ [ groupName, '-$' + y * groupCost ] ];
		npsGroupRange = 'WB!C8';
		wrValue = [ [ -2 ] ];
		npsScoreGroupRange = 'WB!C18';
		npsScoreValue = [ [ -15 ] ];
		loadSheetsApi(values, groupRange, resultSpreadSheetID, majorDimension,
				tagWrite);

		break;
	case 'cantBoard_LIN_C11':
		idX = 'LIN_C11';
		var orangePax = document.getElementById('orangePaxText_' + idX).innerHTML;
		var x = orangePax.replace('<font size="6%" color="orange"> <b>', '');
		var y = x.replace('</b></font>', '');
		var idCell = getCellID();
		groupName = 'SINGLES';
		groupCost = 100;
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		values = [ [ groupName, '-$' + y * groupCost ] ];
		npsGroupRange = 'WB!D8';
		wrValue = [ [ -2 ] ];
		npsScoreGroupRange = 'WB!D18';
		npsScoreValue = [ [ -20 ] ];
		loadSheetsApi(values, groupRange, resultSpreadSheetID, majorDimension,
				tagWrite);
		break;
	case 'cantBoard_FCO_D78':
		idX = 'FCO_D78';
		var orangePax = document.getElementById('orangePaxText_' + idX).innerHTML;
		var x = orangePax.replace('<font size="6%" color="orange"> <b>', '');
		var y = x.replace('</b></font>', '');
		var idCell = getCellID();
		groupName = 'HIGH YIELD';
		groupCost = 200;
		groupRange = 'Game1!A' + idCell + ':B' + idCell;
		values = [ [ groupName, '-$' + y * groupCost ] ];
		npsGroupRange = 'WB!E8';
		wrValue = [ [ -2 ] ];
		npsScoreGroupRange = 'WB!E18';
		npsScoreValue = [ [ -15 ] ];
		loadSheetsApi(values, groupRange, resultSpreadSheetID, majorDimension,
				tagWrite);
		break;

	default:
		break;
	}
}

var cellID = 2, isFirstTime = true, isNpsFirstTime = true, lastCallTag = 0, macSelected = 0;

function getNpsScoreCellID() {
	if (dataNpsScoreCellID != 12 && dataNpsScoreCellID > 12) {
		dataNpsScoreCellID++;
	} else {
		if (isNpsFirstTime == true) {
			isNpsFirstTime = false;
		} else {
			dataNpsScoreCellID++;
		}
	}
	return dataNpsScoreCellID;
}

var cellID = 2, isFirstTime = true, lastCallTag = 0, macSelected = 0;
function getCellID() {
	if (cellID != 2 && cellID > 2) {
		cellID++;
	} else {
		if (isFirstTime == true) {
			isFirstTime = false;
		} else {
			cellID++;
		}
	}
	return cellID;
}