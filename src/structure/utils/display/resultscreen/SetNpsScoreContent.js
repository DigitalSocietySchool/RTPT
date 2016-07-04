function settingNpsData(response) {
	var range = response.result;
	var npsScore = 0;
	if (range.values.length > 0) {
		for (i = 0; i < range.values.length; i++) {
			var row = range.values[i];
			for (var y = 0; y < row.length; y++) {
				var npsValue = parseInt(row[y]);
				npsScore = npsScore + npsValue;
			}

		}
		settingContent('scoreNpsDiv_', 'NPS: ' + npsScore);
	}
}