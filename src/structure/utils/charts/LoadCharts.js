function loadCharts(dataEntry) {
	var chartTitle = "pieChart_" + dataEntry.gsx$boardinggate.$t;
	var redPax = parseInt(dataEntry.gsx$redpax.$t);
	var orangePax = parseInt(dataEntry.gsx$orangepax.$t);
	var greenPax = parseInt(dataEntry.gsx$greenpax.$t);

	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {

		var data = google.visualization.arrayToDataTable([ [ 'PAX', 'STATUS' ],
				[ "", greenPax ], [ "", orangePax ], [ "", redPax ] ]);

		var options = {
			backgroundColor : 'transparent',
			legend : 'none',
			pieSliceText : "none",
			pieHole : 0.6,
			pieSliceTextStyle : {
				color : 'black',
			},
			legend : 'none',
			slices : {
				0 : {
					color : '#41ab35'
				},
				1 : {
					offset : 0.2,
					color : '#ef790e'
				},
				2 : {
					color : '#ff0000'
				}
			}
		};

		var chart = new google.visualization.PieChart(document
				.getElementById(chartTitle));
		chart.draw(data, options);
	}
}