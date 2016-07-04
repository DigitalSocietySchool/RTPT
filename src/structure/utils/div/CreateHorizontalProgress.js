function createGateView(dataEntry) {
	var baseDiv = document.createElement('div');
	setAttributes(baseDiv, 'id', 'baseDiv_' + dataEntry.gsx$boardinggate.$t);
	setAttributes(baseDiv, 'style', 'position:relative; left:'
			+ parseInt(dataEntry.gsx$xpos.$t) + '%;' + 'top:'
			+ parseInt(dataEntry.gsx$ypos.$t) + '%;');

	var backgroundView = document.createElement('div');
	setAttributes(backgroundView, 'id', 'backgroundView_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(backgroundView, 'class', 'w3-card-4 w3-light-grey');
	setAttributes(
			backgroundView,
			'style',
			'left:8px; top:50px; border-radius:5px; border:1px solid #00a1de; padding:2px; position:absolute; width:200px; height:65px;');
	baseDiv.appendChild(backgroundView);

	var innerCircle = document.createElement('div');
	setAttributes(innerCircle, 'id', 'innerCircle_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(
			innerCircle,
			'style',
			'background-color:white; left:95px; top:34px; border-radius:50%; border:1px solid #ef790e; position:absolute; width:31px; height:31px;');
	baseDiv.appendChild(innerCircle);

	var innerOrangePaxText = document.createElement('div');
	setAttributes(innerOrangePaxText, 'id', 'innerOrangePaxText_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(
			innerOrangePaxText,
			'style',
			'color:#ef790e; left:6px; top:0px; position:absolute; width:10px; height:10px; font-size:9px; ');
	innerCircle.appendChild(innerOrangePaxText);

	var pieChart = document.createElement('div');
	setAttributes(pieChart, 'id', 'pieChart_' + dataEntry.gsx$boardinggate.$t);
	setAttributes(pieChart, 'style',
			'left:60px; position:absolute; width:100px; height:100px;');
	baseDiv.appendChild(pieChart);

	var progressBG = document.createElement('div');
	setAttributes(progressBG, 'id', 'progressBG_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(progressBG, 'class', 'w3-progress-container');
	setAttributes(
			progressBG,
			'style',
			'background-color:white; border-radius:25px; border:1px solid #00a1de; left:15px; top:100px; position:relative; width:190px; height:12px;');
	baseDiv.appendChild(progressBG);

	var progressBar = document.createElement('div');
	setAttributes(progressBar, 'id', 'progressBar_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(progressBar, 'class', 'w3-progressbar w3-blue');
	setAttributes(
			progressBar,
			'style',
			'background-color:#00a1de; border-radius:25px; position:absolute; width:50%; height:100%;');
	progressBG.appendChild(progressBar);

	var progressLabel = document.createElement('div');
	setAttributes(progressLabel, 'id', 'progressLabel_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(progressLabel, 'class', 'w3-right w3-text-white');
	setAttributes(progressLabel, 'style',
			'text-align:right; line-height:10px; marginRight:3px;');
	progressBar.appendChild(progressLabel);

	var departingFlight = document.createElement('div');
	setAttributes(departingFlight, 'id', 'departingFlight_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(departingFlight, 'class', 'w3-container');
	setAttributes(
			departingFlight,
			'style',
			'left:15px; top:78px; position:absolute; width:10px; height:10px; color:#00a1de; font-size:17px;');
	baseDiv.appendChild(departingFlight);

	var estimateTimeOfDeparture = document.createElement('div');
	setAttributes(estimateTimeOfDeparture, 'id', 'etd_'
			+ dataEntry.gsx$boardinggate.$t);
	setAttributes(estimateTimeOfDeparture, 'class', 'w3-container');
	setAttributes(
			estimateTimeOfDeparture,
			'style',
			'left:130px; top:70px; position:absolute; width:100px; height:10px; color:#00a1de; font-size:10px;');
	baseDiv.appendChild(estimateTimeOfDeparture);

	document.getElementsByTagName('body')[0].appendChild(baseDiv);
}

function setAttributes(element, attrID, attrValue) {
	element.setAttribute(attrID, attrValue);
}

function createScreen2() {
	var baseDiv = document.createElement('div');
	setAttributes(baseDiv, 'style', 'position:relative;');

	var topBar = document.createElement('div');
	setAttributes(topBar, 'id', 'topBar_');
	setAttributes(topBar, 'class', 'w3-blue');
	setAttributes(topBar, 'style', 'width:100%; display:inline-block;');
	baseDiv.appendChild(topBar);

	var topBarTextDiv = document.createElement('div');
	setAttributes(topBarTextDiv, 'id', 'topBarText_');
	setAttributes(
			topBarTextDiv,
			'style',
			'display: inline-block; margin-left:30%; width:30%; height: 100%; font-size:21px; ');
	topBar.appendChild(topBarTextDiv);

	var klmLogo = document.createElement('img');
	setAttributes(klmLogo, 'style', 'margin-left:25%; width:8%; height:100%;');
	setAttributes(klmLogo, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/klm.png');
	topBar.appendChild(klmLogo);

	var text = document.createElement('div');
	setAttributes(text, 'id', 'generalText_');
	setAttributes(text, 'class', 'w3-left w3-padding-medium w3-text-blue');
	setAttributes(text, 'style', 'width:100%; text-align:left;');// margin-top:5%;
	baseDiv.appendChild(text);

	var statusBar = document.createElement('div');
	setAttributes(statusBar, 'class',
			'w3-card w3-left w3-padding-medium w3-light-grey');
	setAttributes(statusBar, 'style', 'width:100%; height:12%;');
	baseDiv.appendChild(statusBar);

	var buttonGateNumber = document.createElement('button');
	setAttributes(buttonGateNumber, 'id', 'buttonGateNumber_');
	// setAttributes(
	// buttonGateNumber,
	// 'class',
	// 'w3-btn w3-white w3-ripple w3-border w3-border-blue w3-round-xlarge
	// w3-text-blue');
	setAttributes(buttonGateNumber, 'class',
			'w3-btn w3-white w3-border w3-border-blue w3-round-xlarge w3-text-blue');
	setAttributes(buttonGateNumber, 'style', 'vertical-align:middle;');
	statusBar.appendChild(buttonGateNumber);

	var buttonStatusOrange = document.createElement('button');
	setAttributes(buttonStatusOrange, 'id', 'buttonStatusOrange_');
	// setAttributes(
	// buttonStatusOrange,
	// 'class',
	// 'w3-btn w3-white w3-ripple w3-border w3-border-orange w3-round-xlarge
	// w3-text-orange');
	setAttributes(buttonStatusOrange, 'class',
			'w3-btn w3-white w3-border w3-border-orange w3-round-xlarge w3-text-orange');
	setAttributes(buttonStatusOrange, 'style',
			'margin-left:2%; vertical-align:middle;');
	statusBar.appendChild(buttonStatusOrange);

	var buttonStatusRed = document.createElement('button');
	setAttributes(buttonStatusRed, 'id', 'buttonStatusRed_');
	// setAttributes(buttonStatusRed, 'class',
	// 'w3-btn w3-white w3-ripple w3-border w3-border-red w3-round-xlarge
	// w3-text-red');
	setAttributes(buttonStatusRed, 'class',
			'w3-btn w3-white w3-border w3-border-red w3-round-xlarge w3-text-red');
	setAttributes(buttonStatusRed, 'style',
			'margin-left:2%; vertical-align:middle;');
	statusBar.appendChild(buttonStatusRed);

	var buttonFlightsNotLanded = document.createElement('button');
	setAttributes(buttonFlightsNotLanded, 'id', 'buttonFlightsNotLanded_');
	// setAttributes(
	// buttonFlightsNotLanded,
	// 'class',
	// 'w3-btn w3-white w3-ripple w3-border w3-border-blue w3-round-xlarge
	// w3-text-blue');
	setAttributes(buttonFlightsNotLanded, 'class',
			'w3-btn w3-white w3-border w3-border-blue w3-round-xlarge w3-text-blue');
	setAttributes(buttonFlightsNotLanded, 'style',
			'margin-left:2%; vertical-align:middle;');
	statusBar.appendChild(buttonFlightsNotLanded);

	var buttonFlightsLanded = document.createElement('button');
	setAttributes(buttonFlightsLanded, 'id', 'buttonFlightsLanded_');
	// setAttributes(
	// buttonFlightsLanded,
	// 'class',
	// 'w3-btn w3-white w3-ripple w3-border w3-border-blue w3-round-xlarge
	// w3-text-blue');
	setAttributes(buttonFlightsLanded, 'class',
			'w3-btn w3-white w3-border w3-border-blue w3-round-xlarge w3-text-blue');
	setAttributes(buttonFlightsLanded, 'style',
			'margin-left:2%; vertical-align:middle;');
	statusBar.appendChild(buttonFlightsLanded);

	document.getElementsByTagName('body')[0].appendChild(baseDiv);
}

function createConnectingFlightList(entry, tag) {
	var connectedFlightList;
	if (tag == 'ORANGE_PAX') {
		connectedFlightList = document.getElementById('connectedFlightList_');
	} else if (tag == 'RED_PAX') {
		connectedFlightList = document.getElementById('connectedFlightList_');
	} else if (tag == 'FIRST_TIME_SHOW_ORANGE_PAX') {
		connectedFlightList = document.createElement('ul');
		setAttributes(connectedFlightList, 'id', 'connectedFlightList_');
		setAttributes(connectedFlightList, 'class', 'w3-ul w3-card-4');
		setAttributes(connectedFlightList, 'style',
				'position:relative; width:100%; overflow:hidden;top:10px;');
	} else if (tag == 'FLIGHT_NOT_LANDED') {
		connectedFlightList = document.getElementById('connectedFlightList_');
	} else if (tag == 'FLIGHT_LANDED') {
		connectedFlightList = document.getElementById('connectedFlightList_');
	} else {
		return;
	}

	for (var i = 0; i < entry.length; i++) {
		var dataEntry = entry[i];
		var arrGateNo = dataEntry.gsx$arrterminal.$t;

		var connectedFlightListItem = document.createElement('li');
		setAttributes(connectedFlightListItem, 'id', 'connectedFlightListItem_'
				+ arrGateNo);
		setAttributes(connectedFlightListItem, 'class', 'w3-accordion');
		setAttributes(connectedFlightListItem, 'style', 'width:100%;');
		connectedFlightList.appendChild(connectedFlightListItem);

		var arrivalTerminal = document.createElement('button');
		setAttributes(arrivalTerminal, 'id', ID_ARRIVAL_TERMINAL + arrGateNo);
		setAttributes(arrivalTerminal, 'class',
				'w3-btn w3-white w3-border w3-border-blue w3-circle w3-text-blue');
		connectedFlightListItem.appendChild(arrivalTerminal);

		var orangePaxImage = document.createElement('img');
		setAttributes(orangePaxImage, 'id', ID_PAX_IMAGE + arrGateNo);
		setAttributes(orangePaxImage, 'style',
				'width:5%; margin-left:8%; vertical-align:middle;');
		connectedFlightListItem.appendChild(orangePaxImage);

		var orangePaxText = document.createElement('div');
		setAttributes(orangePaxText, 'id', ID_PAX_COUNT + arrGateNo);
		setAttributes(orangePaxText, 'style',
				'display:inline-block; margin-left:0.75%; vertical-align:middle;');
		connectedFlightListItem.appendChild(orangePaxText);

		var flightStatusImage = document.createElement('img');
		setAttributes(flightStatusImage, 'id', ID_FLIGHT_STATUS_IMAGE
				+ arrGateNo);
		setAttributes(flightStatusImage, 'style',
				'width:2.5%; margin-left:8%; vertical-align:middle;');
		connectedFlightListItem.appendChild(flightStatusImage);

		var flightStatusTime = document.createElement('div');
		setAttributes(flightStatusTime, 'id', ID_FLIGHT_STATUS_TIME + arrGateNo);
		setAttributes(flightStatusTime, 'style',
				'display:inline-block; margin-left:1%; vertical-align:middle;');
		connectedFlightListItem.appendChild(flightStatusTime);

		var flightNumber = document.createElement('div');
		setAttributes(flightNumber, 'id', ID_FLIGHT_NUMBER + arrGateNo);
		setAttributes(flightNumber, 'class', 'w3-text-blue');
		setAttributes(flightNumber, 'style',
				'display:inline-block; margin-left:8%; vertical-align:middle;');
		connectedFlightListItem.appendChild(flightNumber);

		// START
		var optionBaseDiv = document.createElement('div');
		setAttributes(optionBaseDiv, 'id', 'optionBaseDiv_' + arrGateNo);
		setAttributes(optionBaseDiv, 'style',
				'display:inline; vertical-align:middle;');
		connectedFlightListItem.appendChild(optionBaseDiv);
		// END

		var callingMAC = document.createElement('img');
		setAttributes(callingMAC, 'id', ID_CALLING_MAC + arrGateNo);
		setAttributes(callingMAC, 'style',
				'width:2.8%; margin-left:8%; vertical-align:middle;');
		optionBaseDiv.appendChild(callingMAC);
		optionBaseDiv.appendChild(createMidLine(arrGateNo));

		var oneFourthDelay = document.createElement('img');
		setAttributes(oneFourthDelay, 'id', ID_ONE_FOURTH_DELAY + arrGateNo);
		setAttributes(oneFourthDelay, 'style',
				'width:2.8%; margin-left:0.5%; vertical-align:middle;');
		optionBaseDiv.appendChild(oneFourthDelay);
		optionBaseDiv.appendChild(createMidLine(arrGateNo));

		var securityCheckPt = document.createElement('img');
		setAttributes(securityCheckPt, 'id', ID_SEC_CHECK_PT + arrGateNo);
		setAttributes(securityCheckPt, 'style',
				'width:2.8%; margin-left:0.5%; vertical-align:middle;');
		optionBaseDiv.appendChild(securityCheckPt);
		optionBaseDiv.appendChild(createMidLine(arrGateNo));

		var threeFourthDelay = document.createElement('img');
		setAttributes(threeFourthDelay, 'id', ID_THREE_FOURTH_DELAY + arrGateNo);
		setAttributes(threeFourthDelay, 'style',
				'width:2.8%; margin-left:0.5%; vertical-align:middle;');
		optionBaseDiv.appendChild(threeFourthDelay);
		optionBaseDiv.appendChild(createMidLine(arrGateNo));

		var lastCall = document.createElement('img');
		setAttributes(lastCall, 'id', ID_LAST_CALL + arrGateNo);
		setAttributes(lastCall, 'style',
				'width:2.8%; margin-left:0.5%; vertical-align:middle;');
		optionBaseDiv.appendChild(lastCall);

		createExpandableListItem(arrGateNo, connectedFlightListItem, i, tag);
	}

	document.getElementsByTagName('body')[0].appendChild(connectedFlightList);
}

function createMidLine(arrGateNo) {
	var midLine = document.createElement('img');
	setAttributes(midLine, 'id', ID_MIDDLE_LINE + arrGateNo);
	setAttributes(midLine, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/line.png');
	setAttributes(midLine, 'style',
			'width:1.5%; margin-left:0.5%; vertical-align:middle;');
	return midLine;
}

function createExpandableListItem(arrGateNo, connectedFlightListItem, index,
		tag) {
	var accordinContent = document.createElement('div');
	setAttributes(accordinContent, 'id', ID_ACCORDIN_CONTENT + arrGateNo);
	setAttributes(accordinContent, 'class',
			'w3-accordion-content w3-animate-opacity');
	setAttributes(accordinContent, 'style', 'width: 100%; overflow: hidden;');
	connectedFlightListItem.appendChild(accordinContent);

	createIndividualView(arrGateNo, accordinContent, index);
	createStatusView(arrGateNo, accordinContent);

	var restStatusView = document.createElement('div');
	setAttributes(restStatusView, 'id', ID_REST_STATUS_VIEW);
	setAttributes(
			restStatusView,
			'style',
			'margin-top:0%; margin-bottom:1%;height:210px; margin-left:66%; background-color: transparent;');
	accordinContent.appendChild(restStatusView);

	creteTRFview(arrGateNo, restStatusView, index, tag);
	createBagCritic(arrGateNo, restStatusView, index, tag);
	createPaxList(arrGateNo, restStatusView);

}

function createOrangePaxList(entry) {
	var baseDiv = document.createElement('div');
	setAttributes(baseDiv, 'id', 'paxList_');
	setAttributes(
			baseDiv,
			'style',
			'display: none; position: fixed; z-index: 1; padding-top: 100px;'
					+ 'left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0);'
					+ 'background-color: rgba(0,0,0,0.4);');

	var topBar = document.createElement('div');
	setAttributes(
			topBar,
			'style',
			'display:inline-block; border-top-right-radius:1em; margin-left:10%; margin-right:10%; border-top-left-radius:1em; width:80%; background:orange');
	baseDiv.appendChild(topBar);

	var arrOrPaxTerminal = document.createElement('button');
	setAttributes(arrOrPaxTerminal, 'id', 'arrTerminal_orPax_');
	setAttributes(arrOrPaxTerminal, 'style',
			'margin-top:0.5%; margin-bottom:0.5%; margin-left:2.2%;');
	setAttributes(arrOrPaxTerminal, 'class',
			'w3-btn w3-transparent w3-border w3-border-white w3-circle w3-text-white');
	// setAttributes(arrOrPaxTerminal, 'style', 'width:100px; height:100px;');
	topBar.appendChild(arrOrPaxTerminal);

	var orPaxImage = document.createElement('img');
	setAttributes(orPaxImage, 'id', 'orPaxImage_');
	setAttributes(orPaxImage, 'style',
			'width:3%; margin-left:17%; vertical-align:middle;');
	setAttributes(orPaxImage, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/pax_white.png');
	topBar.appendChild(orPaxImage);

	var orPaxNumber = document.createElement('div');
	setAttributes(orPaxNumber, 'id', 'orPaxNumber_');
	setAttributes(orPaxNumber, 'class', 'w3-text-white');
	setAttributes(orPaxNumber, 'style',
			'display:inline-block; width:3%; margin-left:1%; vertical-align:middle;');
	topBar.appendChild(orPaxNumber);

	var iconChat = document.createElement('img');
	setAttributes(iconChat, 'id', 'iconChat_');
	setAttributes(iconChat, 'style',
			'width:3%; margin-left:19.5%; vertical-align:middle;');
	setAttributes(iconChat, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/chat_icon_white.png');
	topBar.appendChild(iconChat);

	var circle = document.createElement('img');
	setAttributes(circle, 'id', 'cancel_');
	setAttributes(circle, 'class', 'w3-btn w3-circle');
	setAttributes(circle, 'style',
			'background:transparent; width:8%; margin-left:34.5%; vertical-align:middle;');
	setAttributes(circle, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/circle.png');
	topBar.appendChild(circle);

	var paxListUL = document.createElement('ul');
	setAttributes(paxListUL, 'id', 'paxListUL_');
	setAttributes(paxListUL, 'class', 'w3-ul');
	setAttributes(
			paxListUL,
			'style',
			'border-bottom-left-radius:1em; border-bottom-right-radius:1em; margin-left:10%; margin-right:10%; background-color:#FFFFFF; position:relative; width:80%; overflow:hidden;');
	baseDiv.appendChild(paxListUL);

	for (var i = 0; i < entry.length; i++) {
		var dataEntry = entry[i];
		var id = dataEntry.gsx$id.$t;
		var paxList = document.createElement('li');
		setAttributes(paxList, 'id', 'paxListLi_' + id);
		setAttributes(paxList, 'class', 'w3-border-blue');
		setAttributes(paxList, 'style',
				'margin-left:2%; margin-right:2%; border-bottom-width:.5px; width:96%;');
		paxListUL.appendChild(paxList);

		var catName = document.createElement('div');
		setAttributes(catName, 'id', 'catName_' + id);
		setAttributes(catName, 'class', 'w3-text-blue');
		setAttributes(catName, 'style',
				'width:10%; display:inline-block; vertical-align: middle;');
		paxList.appendChild(catName);

		var paxName = document.createElement('div');
		setAttributes(paxName, 'id', 'paxName_' + id);
		setAttributes(paxName, 'class', 'w3-text-blue');
		setAttributes(paxName, 'style',
				'width:20%; margin-left: 12%; display:inline-block;');
		paxList.appendChild(paxName);

		var chatIcon = document.createElement('img');
		setAttributes(chatIcon, 'style',
				'vertical-align: middle; margin-left: 12%; width:3%;');
		setAttributes(chatIcon, 'src',
				'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/chat_blue.png');
		paxList.appendChild(chatIcon);

		var isMessage = dataEntry.gsx$ismsg.$t;
		if (isMessage == 'TRUE') {
			var msg = document.createElement('div');
			setAttributes(msg, 'id', 'msg_' + id);
			setAttributes(msg, 'class',
					'w3-tag w3-text-blue w3-padding w3-round-large w3-light-grey w3-center');
			setAttributes(
					msg,
					'style',
					'width:25%; border-radius:20px; border:1px solid #F0F0F0; background-color:#F0F0F0; display:inline-block; vertical-align:middle; margin-left:2%;');
			paxList.appendChild(msg);

			var responsibleImage = document.createElement('img');
			setAttributes(responsibleImage, 'id', 'responsibleImage_' + id);
			setAttributes(responsibleImage, 'class', 'w3-circle');
			setAttributes(responsibleImage, 'style',
					'width:5%; vertical-align:middle; margin-left:1%;');
			paxList.appendChild(responsibleImage);
		}

	}

	document.getElementsByTagName('body')[0].appendChild(baseDiv);
}

function createPaxList(arrGateNo, restStatusView) {
	var paxListImage = document.createElement('img');
	setAttributes(paxListImage, 'id', 'paxListImage_' + arrGateNo);
	setAttributes(paxListImage, 'class', 'w3-btn w3-circle');
	setAttributes(paxListImage, 'style',
			'background:transparent; width:25%; margin-left:0%; margin-top:0%');
	setAttributes(paxListImage, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/paxlist.png');
	restStatusView.appendChild(paxListImage);

	var boardingDone = document.createElement('button');
	setAttributes(boardingDone, 'id', 'boardingDone_' + arrGateNo);
	setAttributes(boardingDone, 'class',
			'w3-btn w3-light-green w3-border w3-border-green w3-round w3-text-white');
	setAttributes(boardingDone, 'style',
			'background:transparent; width:25%; margin-left:0%; margin-top:0%');
	setAttributes(boardingDone, 'onclick', 'onBoardingDoneClick(this)');
	restStatusView.appendChild(boardingDone);

	var cantBoard = document.createElement('button');
	setAttributes(cantBoard, 'id', 'cantBoard_' + arrGateNo);
	setAttributes(cantBoard, 'class',
			'w3-btn w3-red w3-border w3-border-red w3-round w3-text-white');
	setAttributes(cantBoard, 'style',
			'background:transparent; width:25%; margin-left:25%;');
	setAttributes(cantBoard, 'onclick', 'onBoardingCancelClick(this)');
	restStatusView.appendChild(cantBoard);

}

function createIndividualView(arrGateNo, accordinContent, index) {
	var indiBaseView = document.createElement('div');
	setAttributes(indiBaseView, 'id', 'indiBaseView_');
	setAttributes(
			indiBaseView,
			'style',
			'margin-right:10%; margin-left:5%; border-radius:20px; border:1px solid #F0F0F0; margin-top:1%; margin-bottom:1%;height:30px; background-color: #F0F0F0;');
	accordinContent.appendChild(indiBaseView);

	var indiValue = document.createElement('div');
	setAttributes(indiValue, 'id', 'indiValue_' + index);
	setAttributes(indiValue, 'class', 'w3-text-blue');
	setAttributes(indiValue, 'style',
			'margin-left:2%; vertical-align:middle; display:inline-block;');
	indiBaseView.appendChild(indiValue);

	var hcCnxValue = document.createElement('div');
	setAttributes(hcCnxValue, 'id', 'hcCnxValue_' + index);
	setAttributes(hcCnxValue, 'class', 'w3-text-blue');
	setAttributes(hcCnxValue, 'style',
			'margin-left:2%; vertical-align:middle; display:inline-block;');
	indiBaseView.appendChild(hcCnxValue);

	var prmValue = document.createElement('div');
	setAttributes(prmValue, 'id', 'prmValue_' + index);
	setAttributes(prmValue, 'class', 'w3-text-blue');
	setAttributes(prmValue, 'style',
			'margin-left:2%; vertical-align:middle; display:inline-block;');
	indiBaseView.appendChild(prmValue);

	// var acptValue = document.createElement('div');
	// setAttributes(acptValue, 'id', 'acptValue_' + index);
	// setAttributes(acptValue, 'class', 'w3-text-blue');
	// setAttributes(acptValue, 'style',
	// 'margin-left:2%; vertical-align:middle; display:inline-block;');
	// indiBaseView.appendChild(acptValue);
}

function createBagCritic(arrGateNo, restStatusView, index, tag) {
	var bagBaseView = document.createElement('div');
	setAttributes(bagBaseView, 'id', 'bagBaseView_');
	setAttributes(
			bagBaseView,
			'style',
			'width:35%; height:50%; margin-left:33%; border-radius:20px; border:1px solid #F0F0F0; background-color: #F0F0F0;');
	restStatusView.appendChild(bagBaseView);

	var bagCriticText = document.createElement('div');
	setAttributes(bagCriticText, 'id', 'bagCriticText_' + index);
	setAttributes(bagCriticText, 'class', 'w3-left w3-text-blue');
	setAttributes(bagCriticText, 'style',
			'margin-left:10%; margin-top:10%; text-align:left;');
	bagBaseView.appendChild(bagCriticText);

	var bagCriticValue = document.createElement('div');
	setAttributes(bagCriticValue, 'id', 'bagCriticValue_');
	setAttributes(bagCriticValue, 'style',
			'height:20%; margin-top:35%; margin-left:3%; text-align:left;');
	bagBaseView.appendChild(bagCriticValue);

	var bagCriticImage = document.createElement('img');
	setAttributes(bagCriticImage, 'id', 'bagCriticImage_');
	setAttributes(bagCriticImage, 'style',
			'float:left; width:25%; vertical-align:middle;');
	if (tag == 'ORANGE_PAX' || tag == 'FIRST_TIME_SHOW_ORANGE_PAX') {
		setAttributes(bagCriticImage, 'src',
				'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/bagcritic.png');
	}
	bagCriticValue.appendChild(bagCriticImage);

	var bags = document.createElement('div');
	setAttributes(bags, 'id', 'bags_' + index);
	setAttributes(bags, 'style',
			'color:blue; margin-left:5%;display:inline-block;vertical-align:middle;');
	bagCriticValue.appendChild(bags);
}

function creteTRFview(arrGateNo, restStatusView, index, tag) {
	var trfBaseView = document.createElement('div');
	setAttributes(trfBaseView, 'id', 'trfBaseView_');
	setAttributes(
			trfBaseView,
			'style',
			'float:left; width:30%; height:100%; border-radius:20px; border:1px solid #F0F0F0; background-color: #F0F0F0;');
	restStatusView.appendChild(trfBaseView);

	var trfText = document.createElement('div');
	setAttributes(trfText, 'id', 'trfText_' + index);
	setAttributes(trfText, 'class', 'w3-left w3-text-blue');
	setAttributes(trfText, 'style',
			'position:relative; margin-left:10%; margin-top:10%; text-align:left;');
	trfBaseView.appendChild(trfText);

	var trfValue = document.createElement('div');
	setAttributes(trfValue, 'id', 'trfValue_');
	setAttributes(trfValue, 'style',
			'height:20%; margin-top:30%; margin-left:3%; text-align:left;');
	trfBaseView.appendChild(trfValue);

	var trfImage = document.createElement('img');
	setAttributes(trfImage, 'id', 'trfImage_');
	setAttributes(
			trfImage,
			'style',
			'margin-top:3%; float:left; width:20%; margin-left:-28%; vertical-align:middle;');
	if (tag == 'RED_PAX') {
		setAttributes(trfImage, 'src',
				'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/trf.png');
	}
	trfValue.appendChild(trfImage);

	var prm = document.createElement('div');
	setAttributes(prm, 'id', 'prm_' + index);
	setAttributes(prm, 'style',
			'color:blue; margin-left:5%;display:inline-block;vertical-align:middle;');
	trfValue.appendChild(prm);
}

function createStatusView(arrGateNo, accordinContent) {
	var statusList = document.createElement('ul');
	setAttributes(statusList, 'id', ID_STATUS_LIST_UL);
	setAttributes(statusList, 'class', 'w3-ul');
	setAttributes(
			statusList,
			'style',
			'float: left; border-radius:20px; border:1px solid #F0F0F0; background-color: #F0F0F0; position:relative; width:60%; overflow:hidden; margin-left:5%; margin-top:0%; margin-bottom:1%;');
	accordinContent.appendChild(statusList);

	for (var i = 0; i < 5; i++) {
		var statusListItem = document.createElement('li');
		setAttributes(statusListItem, 'id', ID_STATUS_LIST_ITEM_LI + i + '_'
				+ arrGateNo);
		setAttributes(statusListItem, 'style', 'border:none; width:100%;');
		statusList.appendChild(statusListItem);

		var statusImage = document.createElement('img');
		setAttributes(statusImage, 'id', ID_STATUS_IMAGE + i + '_' + arrGateNo);
		setAttributes(statusImage, 'style',
				'width:4%; margin-left:1%; vertical-align:middle;');
		statusListItem.appendChild(statusImage);

		var statusTime = document.createElement('div');
		setAttributes(statusTime, 'id', ID_STATUS_TIME + i + '_' + arrGateNo);
		setAttributes(statusTime, 'style',
				'display:inline-block; margin-left:8%; vertical-align:middle;');
		statusListItem.appendChild(statusTime);

		var status = document.createElement('div');
		setAttributes(status, 'id', 'status_' + i + '_' + arrGateNo);
		setAttributes(status, 'style',
				'display:inline-block; margin-left:8%; width:45%; vertical-align:middle;');
		statusListItem.appendChild(status);

		var statusCheck = document.createElement('input');
		setAttributes(statusCheck, 'id', 'statusCheck_' + i + '_' + arrGateNo);
		setAttributes(statusCheck, 'class', 'w3-check');
		setAttributes(statusCheck, 'type', 'checkbox');
		setAttributes(statusCheck, 'style', 'margin-left:8%; width:2.5%;');
		switch (i) {
		case 0:
			setAttributes(statusCheck, 'onchange', 'checkBoxMAC(this)');
			break;
		case 1:
			setAttributes(statusCheck, 'onchange', 'checkBoxOneFourth(this)');
			break;
		case 2:
			setAttributes(statusCheck, 'onchange', 'checkBoxCallDPM(this)');
			break;
		case 3:
			setAttributes(statusCheck, 'onchange', 'checkBoxThirdFourth(this)');
			break;
		case 4:
			setAttributes(statusCheck, 'onchange', 'checkBoxLastCall(this)');
			break;

		default:
			break;
		}
		statusListItem.appendChild(statusCheck);

		var statusResp = document.createElement('img');
		setAttributes(statusResp, 'id', 'statusResp_' + i + '_' + arrGateNo);
		setAttributes(statusResp, 'class', 'w3-circle');
		setAttributes(statusResp, 'style',
				'margin-left:8%; width:3%;vertical-align:middle;');
		switch (i) {
		case 0:
			setAttributes(statusResp, 'onclick', 'onInfoClick(this' + ',' + i
					+ ')');
			break;
		case 1:
			setAttributes(statusResp, 'onclick', 'onInfoClick(this,' + i + ')');
			break;
		case 2:
			setAttributes(statusResp, 'onclick', 'onInfoClick(this,' + i + ')');
			break;
		case 3:
			setAttributes(statusResp, 'onclick', 'onInfoClick(this,' + i + ')');
			break;
		case 4:
			setAttributes(statusResp, 'onclick', 'onInfoClick(this,' + i + ')');
			break;

		default:
			break;
		}
		statusListItem.appendChild(statusResp);
	}
}

function hideDisplayView(element) {
	element.style.visibility = 'hidden';
}

function showDisplayView(element) {
	element.style.visibility = 'visible';
}

function deletePaxList() {
	var ul = document.getElementById('connectedFlightList_');
	if (ul) {
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		}
	}
}