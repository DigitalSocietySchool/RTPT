var enterPassword = "";
var spreadsheetID = "1gF7gKF-SY7E4jyLeuAXtvPoW8URTkLtF7mphVhJRnrw";
var alertNoCredentials = "Please add proper credentials";

function loginCredentials() {
	var userName = document.getElementById("username").value;
	enterPassword = document.getElementById("password").value;

	if (isStringEmpty(userName) == false
			&& isStringEmpty(enterPassword) == false) {
		var url = querySpreadSheet(userName, spreadsheetID);
		jsonp(url);
	} else {
		window.alert(alertNoCredentials);
	}
}

var jsonp = function(url) {
	var script = window.document.createElement('script');
	script.async = true;
	script.src = url;
	script.onerror = function() {
		alert('Can not access JSONP file.')
	};
	var done = false;
	script.onload = script.onreadystatechange = function() {
		if (!done
				&& (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
			done = true;
			script.onload = script.onreadystatechange = null;
			if (script.parentNode) {
				return script.parentNode.removeChild(script);
			}
		}
	};
	window.document.getElementsByTagName('head')[0].appendChild(script);

}

var my_callback = function(data) {
	var obj = JSON.parse(parse(data));
	if (isStringEmpty(enterPassword) == false && enterPassword == obj["pass"]) {
		var redirectURL = obj["redUrl"];
		if (isStringEmpty(redirectURL) == false) {
			window.location.replace(redirectURL);
		}
	} else {
		return;
	}
}