function setOrangePaxData(entry) {
	settingContent('arrTerminal_orPax_', 'GOA<br>E12');
	settingContent('orPaxNumber_', '<font size:"5"><b>' + entry.length
			+ '</b></font>');
	console.log(entry);
	for (var i = 0; i < entry.length; i++) {
		var dataEntry = entry[i];
		var id = dataEntry.gsx$id.$t;
		settingContent('catName_' + id, '<font size:"5"><b>'
				+ dataEntry.gsx$paxcat.$t + '</b></font>');
		settingContent('paxName_' + id, dataEntry.gsx$paxname.$t);
		settingImage('responsibleImage_' + id, dataEntry.gsx$image.$t);
		var isMsgAvailable = dataEntry.gsx$ismsg.$t;
		if (isMsgAvailable == 'TRUE') {
			settingContent('msg_' + id, dataEntry.gsx$msg.$t);
		} else {
			settingContent('msg_' + id, '');
		}
	}
	onCancelClick();
}

function shuffle(array) {
	var copy = [], n = array.length, i;

	// While there remain elements to shuffle…
	while (n) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * array.length);

		// If not already shuffled, move it to the new array.
		if (i in array) {
			copy.push(array[i]);
			delete array[i];
			n--;
		}
	}

	return copy;
}