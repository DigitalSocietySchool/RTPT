var parse = function(data) {
	var column_length = data.table.cols.length;
	if (!column_length || !data.table.rows.length) {
		return false;
	}
	var columns = [], result = [], row_length, value;
	for ( var column_idx in data.table.cols) {
		columns.push(data.table.cols[column_idx].label);
	}

	var pass = "", redUrl = "", desig = "", terminal = "";

	for ( var rows_idx in data.table.rows) {
		row_length = data.table.rows[rows_idx]['c'].length;
		if (column_length != row_length) {
			return false;
		}

		for (var row_idx = 0; row_idx < data.table.rows[rows_idx]['c'].length; row_idx++) {
			value = !!data.table.rows[rows_idx]['c'][row_idx].v ? data.table.rows[rows_idx]['c'][row_idx].v
					: null;
			switch (row_idx) {
			case 0:
				pass = value;
				break;
			case 1:
				redUrl = value;
				break;
			case 2:
				desig = value;
				break;
			case 3:
				terminal = value;
				break;
			default:
				break;
			}
		}
	}
	var finaString = '{' + '"pass" : "' + pass + '",' + '"redUrl"  : "'
			+ redUrl + '",' + '"desig" : "' + desig + '",' + '"termianl" : "'
			+ terminal + '"}';
	// console.log("finaString: " + finaString);
	return finaString;
};