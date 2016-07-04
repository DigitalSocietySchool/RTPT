function settingActionBar(entry) {
	var text = entry.gsx$flightno.$t + ' - ' + entry.gsx$from.$t + ' '
			+ '<i class="material-icons w3-large">arrow_forward</i>' + ' '
			+ entry.gsx$to.$t + ', ' + entry.gsx$date.$t;
	settingContent('topBarText_', text);
}