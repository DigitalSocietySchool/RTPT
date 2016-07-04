function createScreenResult() {
	var baseDiv = document.createElement('div');
	setAttributes(baseDiv, 'style', 'position:relative; height:100%');

	var delayDiv = document.createElement('div');
	setAttributes(delayDiv, 'id', 'delayDiv_');
	setAttributes(delayDiv, 'style',
			'float:left;width:33.3%; height:100%;border-right:3px solid #00A1E4;');
	baseDiv.appendChild(delayDiv);
	createDelayDivSubElements(delayDiv);

	var innerBaseDiv = document.createElement('div');
	setAttributes(innerBaseDiv, 'id', 'bottomLineDiv_');
	setAttributes(innerBaseDiv, 'style',
			'margin-left:33%;width:66.7%; height:100%;');
	baseDiv.appendChild(innerBaseDiv);

	var bottomLineDiv = document.createElement('div');
	setAttributes(bottomLineDiv, 'id', 'bottomLineDiv_');
	setAttributes(bottomLineDiv, 'style',
			'float: left;width:50%; height:100%;border-right:3px solid #00A1E4;');
	innerBaseDiv.appendChild(bottomLineDiv);
	createBottomLineSubElements(bottomLineDiv)

	var npsScoreDiv = document.createElement('div');
	setAttributes(npsScoreDiv, 'id', 'npsScoreDiv_');
	setAttributes(npsScoreDiv, 'style',
			'margin-left:50%;width:50%; height:100%;');
	innerBaseDiv.appendChild(npsScoreDiv);
	createNpsScoreElements(npsScoreDiv);

	document.getElementsByTagName('body')[0].appendChild(baseDiv);
}

function createDelayDivSubElements(delayDiv) {
	var topbar = document.createElement('div');
	setAttributes(topbar, 'style',
			'width:100%; height:20%;background-color:#F4F6F6;');
	delayDiv.appendChild(topbar);

	var topBarHeading = document.createElement('div');
	setAttributes(topBarHeading, 'id', 'topBarHeading_delay');
	setAttributes(topBarHeading, 'style',
			'width:100%; height:100%; color:#00A1E4; font-size:45px;');
	topbar.appendChild(topBarHeading);

	var contentDiv = document.createElement('div');
	setAttributes(contentDiv, 'style', 'width:100%; height:80%;');
	delayDiv.appendChild(contentDiv);

	var planeImage = document.createElement('img');
	setAttributes(planeImage, 'id', 'planeImage_delay');
	setAttributes(planeImage, 'style',
			'width:60%; margin-top:40%; margin-left:20%;');
	setAttributes(planeImage, 'src',
			'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/plane_blue.png');
	contentDiv.appendChild(planeImage);

	var delayText = document.createElement('div');
	setAttributes(delayText, 'id', 'delayText_');
	setAttributes(delayText, 'style',
			'width:100%; height:20%; color:#00A1E4; font-size:50px;');
	contentDiv.appendChild(delayText);
}

function createBottomLineSubElements(bottomLineDiv) {
	var topbar = document.createElement('div');
	setAttributes(topbar, 'style',
			'width:100%; height:20%;background-color:#F4F6F6;');
	bottomLineDiv.appendChild(topbar);

	var topBarHeading = document.createElement('div');
	setAttributes(topBarHeading, 'id', 'topBarHeading_bl');
	setAttributes(topBarHeading, 'style',
			'width:100%; height:100%; color:#00A1E4; font-size:45px;');
	topbar.appendChild(topBarHeading);

	var contentDiv = document.createElement('div');
	setAttributes(contentDiv, 'style', 'width:100%; height:80%;');
	bottomLineDiv.appendChild(contentDiv);

	var delayDiv = document.createElement('div');
	setAttributes(
			delayDiv,
			'style',
			'display:inline-block; margin-top:10%; margin-right:10%; margin-left:10%; height:80%; width:80%; border-radius:20px; border:1px solid #F0F0F0; background-color: #F0F0F0;');
	contentDiv.appendChild(delayDiv);

	var resultLst = document.createElement('ul');
	setAttributes(resultLst, 'id', 'resultLst');
	setAttributes(resultLst, 'class', 'w3-ul');
	setAttributes(resultLst, 'style',
			'width:96%; margin-left:2%; margin-right:2%; margin-top:2%;');
	delayDiv.appendChild(resultLst);

	for (var i = 0; i < 15; i++) {
		var resultLstItem = document.createElement('li');
		setAttributes(resultLstItem, 'id', 'resultLstItem_' + i);
		setAttributes(resultLstItem, 'style', 'border:none; width:100%;');
		resultLst.appendChild(resultLstItem);

		var touchPoint = document.createElement('div');
		setAttributes(touchPoint, 'id', 'touchPoint_' + i);
		setAttributes(touchPoint, 'style',
				'float:left; width:70%; color:#00A1E4;');
		resultLstItem.appendChild(touchPoint);

		var touchPointValue = document.createElement('div');
		setAttributes(touchPointValue, 'id', 'touchPointValue_' + i);
		setAttributes(touchPointValue, 'style', 'margin-left:70%; width:30%;');
		resultLstItem.appendChild(touchPointValue);
	}

	var blueLineDiv = document.createElement('div');
	setAttributes(
			blueLineDiv,
			'style',
			'bottom:2%; margin-right:10%; margin-left:10%; height:1%; width:80%; border-radius:20px; border:1px solid #00A1E4; background-color: #00A1E4;');
	delayDiv.appendChild(blueLineDiv);

	var totalBaseDiv = document.createElement('div');
	setAttributes(totalBaseDiv, 'style',
			'width:96%; margin-left:2%; margin-right:2%');
	delayDiv.appendChild(totalBaseDiv);

	var totalTagDiv = document.createElement('div');
	setAttributes(totalTagDiv, 'id', 'totalTagDiv_');
	setAttributes(totalTagDiv, 'style', 'float:left; width:65%;');
	totalBaseDiv.appendChild(totalTagDiv);

	var totalValueDiv = document.createElement('div');
	setAttributes(totalValueDiv, 'id', 'totalValueDiv_');
	setAttributes(totalValueDiv, 'style', 'margin-left:65%; width:35%;');
	totalBaseDiv.appendChild(totalValueDiv);
}

function createNpsScoreElements(npsScoreDiv) {
	var topbar = document.createElement('div');
	setAttributes(topbar, 'style',
			'width:100%; height:20%;background-color:#F4F6F6;');
	npsScoreDiv.appendChild(topbar);

	var topBarHeading = document.createElement('div');
	setAttributes(topBarHeading, 'id', 'topBarHeading_nps');
	setAttributes(topBarHeading, 'style',
			'width:100%; height:100%; color:#00A1E4; font-size:35px;');
	topbar.appendChild(topBarHeading);

	var contentDiv = document.createElement('div');
	setAttributes(contentDiv, 'style', 'width:100%; height:80%;');
	npsScoreDiv.appendChild(contentDiv);

	var scoreNpsDiv = document.createElement('div');
	setAttributes(scoreNpsDiv, 'id', 'scoreNpsDiv_');
	setAttributes(scoreNpsDiv, 'style',
			'width:100%; height:15%; color:#00A1E4; font-size:50px;');
	contentDiv.appendChild(scoreNpsDiv);

	var wbLst = document.createElement('ul');
	setAttributes(wbLst, 'id', 'wbLst');
	setAttributes(wbLst, 'class', 'w3-ul');
	setAttributes(
			wbLst,
			'style',
			'height:85%; position:relative; overflow:hidden; width:96%; margin-left:2%; margin-right:2%; margin-top:2%;');
	contentDiv.appendChild(wbLst);

	for (var i = 0; i < 4; i++) {
		var wbLstItem = document.createElement('li');
		setAttributes(wbLstItem, 'id', 'wbLstItem_' + i);
		setAttributes(wbLstItem, 'style',
				'border:none; width:100%; height:20%; ');
		wbLst.appendChild(wbLstItem);

		var groupIMG = document.createElement('img');
		setAttributes(groupIMG, 'id', 'groupIMG_' + i);
		setAttributes(groupIMG, 'style', 'float:left; width:22%;');
		switch (i) {
		case 0:
			setAttributes(groupIMG, 'src',
					'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/elderly_icon.png');
			break;
		case 1:
			setAttributes(groupIMG, 'src',
					'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/family_icon.png');
			break;
		case 2:
			setAttributes(groupIMG, 'src',
					'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/single_icon.png');
			break;
		case 3:
			setAttributes(groupIMG, 'src',
					'https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/vip_icon.png');
			break;

		default:
			break;
		}
		wbLstItem.appendChild(groupIMG);

		var wbSore = document.createElement('div');
		setAttributes(wbSore, 'id', 'wbSore_' + i);
		setAttributes(wbSore, 'style',
				'display:inline-block; margin-left:3%; font-size:35px; color:#00A1E4;');
		wbLstItem.appendChild(wbSore);

		var wbCat = document.createElement('div');
		setAttributes(wbCat, 'id', 'wbCat_' + i);
		setAttributes(wbCat, 'style',
				'display:inline-block; margin-left:3%; font-size:32px; color:#00A1E4;');
		wbLstItem.appendChild(wbCat);
	}
}

function setAttributes(element, attrID, attrValue) {
	element.setAttribute(attrID, attrValue);
}