function settingFilter(entry) {
	// setting departing gate number
	settingContent('buttonGateNumber_', entry.gsx$gateno.$t);
	// setting orange pax status
	settingContent('buttonStatusOrange_', 'STATUS (' + entry.gsx$orangepax.$t
			+ ')');
	// setting red pax status
	settingContent('buttonStatusRed_', 'STATUS (' + entry.gsx$redpax.$t + ')');
	/*// setting flights not landed status
	settingContent('buttonFlightsNotLanded_',
			'<img src="assets/arrived_flight_icon.png" style="width:18%;">'
					+ ' (' + entry.gsx$flightsnotlanded.$t + ')');
	// setting flights landed status
	settingContent('buttonFlightsLanded_',
			'<img src="assets/arriving_flight_icon.png" style="width:18%;">'
					+ ' (' + entry.gsx$flightslanded.$t + ')');*/
}