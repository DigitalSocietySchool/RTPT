function settingBottomLineData(response) {
	var delayCount = 0;
	var range = response.result;
	if (range.values.length > 0) {
		for (i = 0; i < range.values.length; i++) {
			var row = range.values[i];
			if (row.length == 0) {
				row.splice(i, 1)
			}
			var touchPointText = row[0];
			var touchPointValue = row[1];
			settingContent('touchPoint_' + i, touchPointText);
			// console.log(touchPointValue)
			if (touchPointValue != undefined && touchPointValue.length > 2
					&& touchPointValue.indexOf('-') > -1) {
				if (i == range.values.length - 1) {
					document.getElementById('totalTagDiv_').style.color = 'red';
					document.getElementById('totalValueDiv_').style.color = 'red';
					document.getElementById('totalTagDiv_').style.fontSize = '20px';
					document.getElementById('totalValueDiv_').style.fontSize = '20px';
					settingContent('totalTagDiv_', 'LOSS');
				}
				document.getElementById('touchPointValue_' + i).style.color = 'red';
			} else {
				if (i == range.values.length - 1) {
					document.getElementById('totalTagDiv_').style.color = '#00A1E4';
					document.getElementById('totalValueDiv_').style.color = '#00A1E4';
					document.getElementById('totalTagDiv_').style.fontSize = '20px';
					document.getElementById('totalValueDiv_').style.fontSize = '20px';
					settingContent('totalTagDiv_', 'PROFIT');
				}

				document.getElementById('touchPointValue_' + i).style.color = '#00A1E4';
			}
			if (i == range.values.length - 1) {
				settingContent('totalValueDiv_', touchPointValue);
			} else {
				settingContent('touchPointValue_' + i, touchPointValue);
			}

			if (touchPointText != undefined && touchPointText.length > 2
					&& touchPointText.indexOf('Delay') > -1) {
				delayCount++;
				settingContent('delayText_', '<b>' + '+' + delayCount
						+ ' DELAY' + '</b>');
			}
		}
	}
}