function startResultScreen() {
	createScreenResult();
	checkAuth();
	settingResultScreenActionBar();
	settingDelaySection();
	tagResultScreen = 'BOTTOM_LINE';
	rangeResult = 'Game1!A2:B16';
	setTimeout('loadResultSheetApi();', 3000);

}