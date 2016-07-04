var isDisplayedOnce = false;
function overview() {
	google.charts.load('current', {
		packages : [ 'corechart' ]
	});
	var intervalID = setInterval('getOverview();', 3000);
}

function getOverview() {
	var currentTimestamp = new Date().getTime();
	var url = getTerminalOverviewURL();
	$
			.getJSON(
					url,
					function(data) {
						var entry = data.feed.entry;
						workingWithTerminalImage();
						for (var i = 0; i < entry.length; i++) {
							var dataEntry = entry[i];
							if (isCondToShowFlight(dataEntry, currentTimestamp) == true) {
								if (isDisplayedOnce == false) {
									createGateView(dataEntry);
									onGateElementClick(dataEntry);
								}
								workWithLinearProgressBar(dataEntry,
										parseInt(currentTimestamp))
								workingWithDepartingFlightNumber(dataEntry);
								workingWithOrangePax(dataEntry);
								workingWithETD(dataEntry);
								loadCharts(dataEntry);
								if (i == entry.length - 1) {
									isDisplayedOnce = true;
								}
							}
						}

					});
}