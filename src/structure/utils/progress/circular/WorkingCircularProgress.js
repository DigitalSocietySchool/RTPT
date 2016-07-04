var GET_STD = 'GET_STD';
var GET_ETD = 'GET_ETD';

function workingWithTerminalImage() {
	var terminalImage = document.getElementById("terminalImage");
	// position: absolute; width: 100%; max-width: 1366px; height: 768px;
	terminalImage.style.position = 'absolute';
	terminalImage.style.width = 100 + '%';
	// terminalImage.style.maxWidth = window.screen.availWidth + 'px';
	// terminalImage.style.height = window.screen.availHeight + 'px';
	terminalImage.style.maxWidth = 1024 + 'px';
	terminalImage.style.height = 700 + 'px';
	terminalImage.src = "https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/f-terminal.png";
}

function workWithLinearProgressBar(dataEntry, ct) {
	var idPB = "progressBar_" + dataEntry.gsx$boardinggate.$t;
	var idPBL = "progressLabel_" + dataEntry.gsx$boardinggate.$t;

	var progressBar = document.getElementById(idPB);
	var progressBarLabel = document.getElementById(idPBL);

	var dt = parseInt(dataEntry.gsx$departingtime.$t);
	var progressValue = 1 - (getProgressValue(ct, dt) / 100);
	progressBarLabel.style.fontSize = 10 + "px";
	progressBarLabel.textContent = "V" + getInt(progressValue * 90);
	progressBar.style.width = getInt(progressValue * 100) + '%';
}

function workingWithETD(dataEntry) {
	var idETD = "etd_" + dataEntry.gsx$boardinggate.$t;
	var etd = document.getElementById(idETD);

	var etdStd = 'STD ' + getTime(GET_STD, dataEntry);
	if (getInt(dataEntry.gsx$etd.$t) > getInt(dataEntry.gsx$departingtime.$t)) {
		etdStd = etdStd + '<b> ETD ' + '+' + getTime(GET_ETD, dataEntry)
				+ '</b>';
	}
	$('#' + idETD).html(etdStd);
}

function getTime(tag, dataEntry) {
	var time;
	if (tag == GET_STD) {
		time = getTime1(tag, getInt(dataEntry.gsx$departingtime.$t));
	} else if (tag == GET_ETD) {
		var std = getTime1(tag, getInt(dataEntry.gsx$departingtime.$t));
		var etd = getTime1(tag, getInt(dataEntry.gsx$etd.$t));

		time = etd - std;
	}
	return time;
}

function getTime1(tag, value) {
	var date = new Date(value);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	if (tag == GET_STD) {
		return hours + ':' + minutes.substr(-2);
	} else if (tag == GET_ETD) {
		return minutes.substr(-2);
	}
}

function workingWithOrangePax(dataEntry) {
	var gateNumber = dataEntry.gsx$boardinggate.$t;
	var idIT = "innerOrangePaxText_" + gateNumber;
	var innerText = document.getElementById(idIT);
	var centName = dataEntry.gsx$orangepax.$t;
	if (centName > 0) {
		// isOrangePaxZero = false;
		document.getElementById('baseDiv_' + gateNumber).style.opacity = "1.0";
		centName = centName + '<br/>' + 'PAX';
		$('#' + idIT).html(centName);
	} else {
		// console.log(isOrangePaxZero);
		// isOrangePaxZero = true;
		document.getElementById('baseDiv_' + gateNumber).style.opacity = "0.2";
		centName = centName + '<br/>' + 'PAX';
		return;
	}
	// var centName = dataEntry.gsx$orangepax.$t +

}

function workingWithDepartingFlightNumber(dataEntry) {
	var idDF = "departingFlight_" + dataEntry.gsx$boardinggate.$t;
	var departingFlight = document.getElementById(idDF);
	departingFlight.textContent = dataEntry.gsx$flightnumber.$t;
}

function workingWithPaxDiv(dataEntry) {
	var orangePAX = dataEntry.gsx$orangepax.$t;
	var idtextPieChart = dataEntry.gsx$boardinggate.$t + "_tpchart";
	var textPieChart = document.getElementById(idtextPieChart);
	console.log(textPieChart);
	textPieChart.style.fontSize = 12 + "px";
	var textDisplayed = orangePAX + ' PAX';
	textPieChart.textContent = textDisplayed;
}