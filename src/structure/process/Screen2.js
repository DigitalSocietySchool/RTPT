function startScreen() {
	// document.write('a');
	createScreen2();
	var url = getScreen2Url();
	$.getJSON(url, function(data) {
		var entry = data.feed.entry;
		settingOnlineDummyData(entry[0]);
	});
}

function settingOnlineDummyData(entry) {
	settingActionBar(entry);
	settingGeneralText();
	settingFilter(entry);
	getOrangePaxData();
	onRedFilterClick();
	onGateNumberClick();
	checkAuth();
}

function getOrangePaxData() {
	var url = getConnectionFlightWithOrangPaxUrl();
	$.getJSON(url, function(data) {
		var entry = data.feed.entry;
		createConnectingFlightList(entry, 'FIRST_TIME_SHOW_ORANGE_PAX');
		settingListItem(entry, 'ORANGE_PAX');
		onOrangeFilterClick();
		onFlightFilterClick();
		isOrangePaxListEnabled = true;
		for (var i = 0; i < entry.length; i++) {
			var dataEntry = entry[i];
			listItemClick(dataEntry);
			paxListViewClick(dataEntry);
			// checkBoxClicks(dataEntry.gsx$arrterminal.$t);
		}
	});
}