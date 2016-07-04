function settingListItem(entry, tag) {
	var flightLanded = [], flightNotLanded = [];
	for (var i = 0; i < entry.length; i++) {
		var dataEntry = entry[i];
		var arrGateNo = dataEntry.gsx$arrterminal.$t;
		var isFlightLanded = dataEntry.gsx$isflightlanded.$t;

		var list = document.getElementById('connectedFlightListItem_'
				+ arrGateNo);
		var items = list.childNodes;
		// console.log(items[11].childNodes[0].childNodes[0].childNodes[0].id);
		// console.log(items);
		// setting arrival terminal data
		settingContent(ID_ARRIVAL_TERMINAL + arrGateNo, '<font size="2">'
				+ dataEntry.gsx$ter1.$t + '<br>' + dataEntry.gsx$ter2.$t
				+ '</font>');

		// setting PAX Image
		if (tag != '') {
			if (tag == 'ORANGE_PAX') {
				switch (arrGateNo) {
				case 'MAD_C12':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_elderly.png');
					break;
				case 'TRD_A04':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_family.png');
					break;
				case 'LIN_C11':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_singles.png');
					break;
				case 'FCO_D78':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_highyield.png');
					break;

				default:
					break;
				}

			} else if (tag == 'RED_PAX') {
				settingImage(ID_PAX_IMAGE + arrGateNo, 'red_pax_icon.png');
			}
		} else {
			if (isOrangePaxListEnabled = true) {
				switch (arrGateNo) {
				case 'MAD_C12':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_elderly.png');
					break;
				case 'TRD_A04':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_family.png');
					break;
				case 'LIN_C11':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_singles.png');
					break;
				case 'FCO_D78':
					settingImage(ID_PAX_IMAGE + arrGateNo, 'pax_highyield.png');
					break;

				default:
					break;
				}
				// settingImage(ID_PAX_IMAGE + arrGateNo,
				// 'orange_pax_icon.png');
			} else {
				settingImage(ID_PAX_IMAGE + arrGateNo, 'red_pax_icon.png');
			}
		}

		// setting orange pax data
		var paxData;
		if (tag != '') {
			if (tag == 'ORANGE_PAX') {
				var orangePAX = dataEntry.gsx$orangepax.$t;
				if (orangePAX.length == 1) {
					orangePAX = '0' + orangePAX;
				}
				paxData = '<font size="6%" color="orange" > <b>' + orangePAX
						+ '</b></font>'
			} else if (tag == 'RED_PAX') {
				paxData = '<font size="6%" color="red" > <b>'
						+ dataEntry.gsx$redpax.$t + '</b></font>'
			}
		} else {
			if (isOrangePaxListEnabled = true) {
				var orangePAX = dataEntry.gsx$orangepax.$t;
				if (orangePAX.length == 1) {
					orangePAX = '0' + orangePAX;
				}
				paxData = '<font size="6%" color="orange" > <b>' + orangePAX
						+ '</b></font>'
			} else {
				paxData = '<font size="6%" color="red" > <b>'
						+ dataEntry.gsx$redpax.$t + '</b></font>'
			}
		}

		settingContent(ID_PAX_COUNT + arrGateNo, paxData);

		// setting flight status image
		if (isFlightLanded == 'TRUE') {
			settingImage(ID_FLIGHT_STATUS_IMAGE + arrGateNo,
					'arrived_flight_icon.png');
			flightLanded.push(isFlightLanded);
		} else {
			settingImage(ID_FLIGHT_STATUS_IMAGE + arrGateNo,
					'arriving_flight_icon.png');
			flightNotLanded.push(isFlightLanded);
		}

		// setting flight status time
		var flightStatusTime;
		if (tag != '') {
			// console.log(i);
			if (tag == 'ORANGE_PAX') {
				flightStatusTime = '<font id = "flightStatusTime_eta_rct_'
						+ i
						+ '"'
						+ 'class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
						+ dataEntry.gsx$eba.$t
						+ '<br>RCT - '
						+ dataEntry.gsx$rct.$t
						+ '</font><font id = "flightStatusTime_cdct_'
						+ i
						+ '"'
						+ 'class="w3-text-orange" size="2" style="vertical-align: middle;"><br>CDCT - '
						+ dataEntry.gsx$act.$t + '</font>';// color="orange"
			} else if (tag == 'RED_PAX') {
				flightStatusTime = '<font class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
						+ dataEntry.gsx$eba.$t
						+ '<br>RCT - '
						+ dataEntry.gsx$rct.$t
						+ '</font><font class="w3-text-red" size="2" style="vertical-align: middle;"><br>CDCT - '
						+ dataEntry.gsx$act.$t + '</font>';// color="red"
			}
		} else {
			if (isOrangePaxListEnabled = true) {
				flightStatusTime = '<font id = "flightStatusTime_eta_rct_'
						+ i
						+ '"'
						+ 'class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
						+ dataEntry.gsx$eba.$t
						+ '<br>RCT - '
						+ dataEntry.gsx$rct.$t
						+ '</font><font id = "flightStatusTime_cdct_'
						+ i
						+ '"'
						+ 'class="w3-text-orange" size="2" style="vertical-align: middle;"><br>CDCT - '
						+ dataEntry.gsx$act.$t + '</font>';// color="orange"
			} else {
				flightStatusTime = '<font class="w3-text-blue" size="2" style="vertical-align: middle;">ETA - '
						+ dataEntry.gsx$eba.$t
						+ '<br>RCT - '
						+ dataEntry.gsx$rct.$t
						+ '</font><font class="w3-text-red" size="2" style="vertical-align: middle;"><br>CDCT - '
						+ dataEntry.gsx$act.$t + '</font>';// color="red"
			}
		}
		settingContent(ID_FLIGHT_STATUS_TIME + arrGateNo, flightStatusTime);

		// setting flight number
		settingContent(ID_FLIGHT_NUMBER + arrGateNo, '<font size="5"><b>'
				+ dataEntry.gsx$arrflightno.$t + '</b></font>');

		// setting Announcement in arriving flight
		// if (dataEntry.gsx$isannouncementav.$t == 'TRUE') {
		// var isAnnClicked = dataEntry.gsx$isannclick.$t;
		// var id = ID_ANN_ARR_FLIGHT + arrGateNo;
		// var resource = 'flight_ann_nc.png';
		settingImage(ID_CALLING_MAC + arrGateNo, 'mac_icon_nc.png');
		// if (isAnnClicked == 'TRUE') {
		// resource = 'flight_ann_c.png';
		// } else {

		// }

		// } else {
		// settingImage(ID_ANN_ARR_FLIGHT + arrGateNo, 'not_availabale.png');
		// }

		// setting MAC availability
		// if (dataEntry.gsx$ismacav.$t == 'TRUE') {
		// var isMacClicked = dataEntry.gsx$ismacclick.$t;
		// var id = ID_ONE_FOURTH_DELAY + arrGateNo;
		// var resource = 'mac_icon_nc.png';
		// if (isMacClicked == 'TRUE') {
		// resource = 'mac_icon_c.png';
		// } else {

		// }
		settingImage(ID_ONE_FOURTH_DELAY + arrGateNo, '14_nc.png');
		// } else {
		// settingImage(ID_CALLING_MAC + arrGateNo, 'not_availabale.png');
		// }

		// setting Operational triangle availability
		// if (dataEntry.gsx$istriav.$t == 'TRUE') {
		// var isDamClicked = dataEntry.gsx$isdamclick.$t;
		// var id = ID_SEC_CHECK_PT + arrGateNo;
		// var resource;
		// if (isDamClicked == 'TRUE') {
		// resource = 'dam_c.png';
		// } else {
		// resource = 'dam_nc.png';
		// }
		settingImage(ID_SEC_CHECK_PT + arrGateNo, 'sec_nc.png');
		// } else {
		// settingImage(ID_OPERATIONAL_TRIANGLE + arrGateNo,
		// 'not_availabale.png');
		// }

		// setting Security check availability
		// if (dataEntry.gsx$isseccheckav.$t == 'TRUE') {
		// var isSecClicked = dataEntry.gsx$issecclick.$t;
		// var id = ID_THREE_FOURTH_DELAY + arrGateNo;
		// var resource;
		// if (isSecClicked == 'TRUE') {
		// resource = 'sec_c.png';
		// } else {
		// resource = 'sec_nc.png';
		// }
		settingImage(ID_THREE_FOURTH_DELAY + arrGateNo, '34_nc.png');
		// } else {
		// settingImage(ID_SEC_CHECK_PT + arrGateNo, 'not_availabale.png');
		// }

		// setting Broadcast availability
		// if (dataEntry.gsx$isbcav.$t == 'TRUE') {
		// settingImage(items[10].id, 'assets/last_call_icon.png');
		// } else {
		settingImage(ID_LAST_CALL + arrGateNo, 'lc_nc.png');
		// }

		// Setting expandable statusImage & expandable status-Check
		var isAnnClicked = dataEntry.gsx$isannclick.$t;
		var annID = 'statusImage_0' + '_' + arrGateNo;
		if (isAnnClicked == 'TRUE') {
			// settingImage(annID, 'mac_icon_c.png');
			settingImage(annID, 'mac_icon_nc.png');
			setCheckboxValue(annID);
		} else {
			settingImage(annID, 'mac_icon_nc.png');
			setCheckboxValue(annID, false);
		}

		var isMacClicked = dataEntry.gsx$ismacclick.$t;
		var macID = 'statusImage_1' + '_' + arrGateNo;
		if (isMacClicked == 'TRUE') {
			// settingImage(macID, 'flight_ann_c.png');
			// settingImage(macID, 'flight_ann_nc.png');
			settingImage(macID, '14_nc.png');
			setCheckboxValue(macID, true);
		} else {
			// settingImage(macID, 'flight_ann_nc.png');
			settingImage(macID, '14_nc.png');
			setCheckboxValue(macID, false);
		}

		var isDamClicked = dataEntry.gsx$isdamclick.$t;
		var damID = 'statusImage_2' + '_' + arrGateNo;
		if (isDamClicked == 'TRUE') {
			settingImage(damID, 'sec_c.png');
			setCheckboxValue(damID, true);
		} else {
			settingImage(damID, 'sec_nc.png');
			setCheckboxValue(damID, false);
		}
		var isSecClicked = dataEntry.gsx$issecclick.$t;
		var secID = 'statusImage_3' + '_' + arrGateNo;
		if (isSecClicked == 'TRUE') {
			// settingImage(secID, 'sec_c.png');
			settingImage(secID, '34_nc.png');
			setCheckboxValue(secID, true);
		} else {
			// settingImage(secID, 'sec_nc.png');
			settingImage(secID, '34_nc.png');
			setCheckboxValue(secID, false);
		}

		var lastCallID = 'statusImage_4' + '_' + arrGateNo;
		settingImage(lastCallID, 'lc_nc.png');
		setCheckboxValue(lastCallID, false);

		// Setting expandable status-Time
		/*
		 * settingContent(items[7].childNodes[0].childNodes[0].childNodes[1].id,
		 * dataEntry.gsx$anntime.$t);
		 * settingContent(items[7].childNodes[0].childNodes[1].childNodes[1].id,
		 * dataEntry.gsx$mactime.$t);
		 * settingContent(items[7].childNodes[0].childNodes[2].childNodes[1].id,
		 * dataEntry.gsx$tritime.$t);
		 * settingContent(items[7].childNodes[0].childNodes[3].childNodes[1].id,
		 * dataEntry.gsx$secchecktime.$t);
		 */

		// Setting expandable status-Text
		settingContent('status_0' + '_' + arrGateNo, 'Send a MaC Agent');
		settingContent('status_1' + '_' + arrGateNo, '1/4 Delay');
		settingContent('status_2' + '_' + arrGateNo, 'Passport Control');
		settingContent('status_3' + '_' + arrGateNo, '3/4 Delay');
		settingContent('status_4' + '_' + arrGateNo, 'Last Call');

		// statusResp_0_MAD_C12
		// Setting expandable status-resp-Image
		settingImage('statusResp_0' + '_' + arrGateNo, 'icon_info.png');
		settingImage('statusResp_1' + '_' + arrGateNo, 'icon_info.png');
		settingImage('statusResp_2' + '_' + arrGateNo, 'icon_info.png');
		settingImage('statusResp_3' + '_' + arrGateNo, 'icon_info.png');
		settingImage('statusResp_4' + '_' + arrGateNo, 'icon_info.png');

		// Setting TRF text
		settingContent('trfText_' + i, 'TRF');

		// setting TRF content
		// settingContent(
		// items[15].childNodes[1].childNodes[0].childNodes[1].childNodes[1].id,
		// '<b>' + dataEntry.gsx$prmvalue.$t + '</b> PRM');
		// Setting BAG CRITIC text
		settingContent('bagCriticText_' + i, 'BAG Critic');
		// setting BAG CRITIC content
		if (tag != '') {
			if (tag == 'ORANGE_PAX') {
				settingContent('bags_' + i, '<b>'
						+ dataEntry.gsx$bagcriticvalue.$t + '</b>');
			}
		}

		// Setting indi value
		settingContent('indiValue_' + i, 'INDIV <b>'
				+ dataEntry.gsx$indivalue.$t + '</b>');
		// Setting HC CNX value
		settingContent('hcCnxValue_' + i, 'HIGH YIELD <b>'
				+ dataEntry.gsx$hccnxvalue.$t + '</b>');
		// Setting PRM value
		settingContent('prmValue_' + i, 'PRM <b>' + dataEntry.gsx$prmvalue.$t
				+ '</b>');
		settingContent('boardingDone_' + arrGateNo, 'Boarded');
		settingContent('cantBoard_' + arrGateNo, 'Missed');
		// Setting Acpt & Sby value
		// settingContent(items[7].childNodes[2].childNodes[3].id,
		// 'Acpt & Sby <b>' + dataEntry.gsx$acptvalue.$t + '</b>');

		if (i == entry.length - 1) {
			var flightNotLandedCount = flightNotLanded.length;
			var flightLandedCount = flightLanded.length;
			if (isFlighLandedClicked == false
					&& isFlighNotLandedClicked == false) {
				if (flightNotLandedCount != 0) {
					document.getElementById('buttonFlightsNotLanded_').style.display = "inline-block";
					settingContent(
							'buttonFlightsNotLanded_',
							'<img src="https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/arriving_flight_icon.png" style="width:18%;">'
									+ ' (' + flightNotLanded.length + ')');
				} else {
					document.getElementById('buttonFlightsNotLanded_').style.display = "none";
				}
				if (flightLandedCount != 0) {
					document.getElementById('buttonFlightsLanded_').style.display = "inline-block";
					settingContent(
							'buttonFlightsLanded_',
							'<img src="https://googledrive.com/host/0Bwxm6XF3WWbfelpRNkZfck9zaTQ/arrived_flight_icon.png" style="width:18%;">'
									+ ' (' + flightLanded.length + ')');
				} else {
					document.getElementById('buttonFlightsLanded_').style.display = "none";
				}
			}
		}
	}
}