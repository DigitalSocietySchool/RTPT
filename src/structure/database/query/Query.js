function querySpreadSheet(userName, spreadsheetID) {
	var query = "select B,C,D,E where A = '" + userName + "'";
	var queryUrl = "https://spreadsheets.google.com/tq?tqx=responseHandler:my_callback&tq="
			+ encodeText(query) + "&key=" + spreadsheetID + "&gid=0";
	return queryUrl;
}