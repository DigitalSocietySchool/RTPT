function settingWBData(response) {
	var range = response.result;
	if (range.values.length > 0) {
		for (var i = 0; i < range.values.length; i++) {
			var row = range.values[i];
			for (var y = 0; y < row.length; y++) {
				var wbValue = row[y];
				settingContent('wbSore_' + y, wbValue);
				if (wbValue > 0 && wbValue < 6) {
					settingContent('wbCat_' + y, 'Detractor');
				} else if (wbValue >= 9 && wbValue <= 10) {
					settingContent('wbCat_' + y, 'Promotor!');
				} else {
					settingContent('wbCat_' + y, '');
				}
			}
		}

	}
}