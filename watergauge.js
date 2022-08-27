(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema, Structure definition includes columns, alias and data type
    myConnector.getSchema = function(schemaCallback) {
		// Define column by column for watergaugestations
        var cols = [{
        id: "Nr", //not included in datasource, placeholder for artificial running number 
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "uuid",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "number",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "shortname",
        alias: "shortname wassergepelstaton",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "longname",
        alias: "longname wassergepelstaton",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "km",
        alias: "km",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "agency",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "longitude",
        alias: "longitude wassergepelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "latitude",
        alias: "longitude wassergepelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "watershort",
        alias: "water shortname",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "waterlong",
        alias: "water longname",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "timeseries_code",
        alias: "Code of timeseries measurement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "timeseries",
        alias: "Name of timeseries measurement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "timeseries_unit",
        alias: "Unit of timeseries measurement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "equidistance",
        alias: "Distance of the measured values in minutes",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "timestamp",
        alias: "timestamp of current measurement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "currentMeasurement",
        alias: "currentMeasurement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "trend",
        alias: "Trend of water movement",
        dataType: tableau.dataTypeEnum.string
	}, {
        id: "stateMnwMhw",
        alias: "Relation between Mnw and Mhw",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "stateNswHsw",
        alias: "Relation between Nsw and Hsw",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "gaugeZero_unit",
        alias: "Unit of gaugezero",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "gaugeZero",
        alias: "Gaugezero",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "valid_from",
        alias: "Validity of watergauge",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Marke_I_unit",
        alias: "Unit of Marke_I",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Marke_I_value",
        alias: "Value of Marke_I",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Marke_I_validity",
        alias: "Validity of Marke_I",
        dataType: tableau.dataTypeEnum.string
    }];
		
	// Define watergaugestations table with predefined columns
        var watergauge_table = {
            id: "watergaugestations", //needs to be one word
            alias: "Watergaugestations installed in landscape of Germany",
            columns: cols
        };

        
	// // Schema for watergauge timeseries data
	// var timeseries_cols = [{
		// id: "uuid",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "timeseries_code",
        // alias: "Code of timeseries measurement",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "timeseries",
        // alias: "Name of timeseries measurement",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "timeseries_unit",
        // alias: "Unit of timeseries measurement",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "Equidistance",
        // alias: "Distance of the measured values in minutes",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "currentMeasurement",
        // alias: "currentMeasurement",
        // dataType: tableau.dataTypeEnum.string
	// }, {
        // id: "Trend",
        // alias: "Trend of watergauge",
        // dataType: tableau.dataTypeEnum.string
	// }];

	// var timeseriesTable = {
		// id: "timeSeries",
		// alias: "Timeseries Data",
		// columns: timeseries_cols
	// };	
		
	
		schemaCallback([watergauge_table]);
    };

    // Download the masterdata data (Watergauge in Germany)
    myConnector.getData = function(table, doneCallback) {
        var waterObj = JSON.parse(tableau.connectionData),
            dateString = "waters=" + waterObj.water + "&km=" + waterObj.distance + "&radius=" + waterObj.radius,
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString;
				
		console.log(apiCall);
		
		if (waterObj.water == '666'){
			apiCall = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?includeTimeseries=true&includeCurrentMeasurement=true'
				};
		
		console.log(apiCall);

		
		$.getJSON("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true", function(result) {
			var anzahl = result.length;
			var gaugevalue = "";
			var gaugeunit = "";
			var MarkeIunit = "";
                
				tableData = [];
console.log(anzahl);
console.log(result[0].uuid);
console.log(result[0].timeseries[0].shortname);
console.log(result[0].timeseries[0].gaugeZero.unit);
var testvar2 = result[0].timeseries[0].characteristicValues[0].unit;
console.log(result[0].timeseries[0].characteristicValues[0].unit);
        


            // Iterate over the JSON object
        for (var i = 0, len = anzahl; i < len; i++) {
				// Check if gauge unit is declared
				if (result[i].timeseries[0].gaugeZero?.unit) {
						gaugeunit = result[i].timeseries[0].gaugeZero.value;
					} else {
						gaugeunit = 'TBA';
							};
				
				// Check if gauge value is declared
				if (result[i].timeseries[0].gaugeZero?.value) {
						gaugevalue = result[i].timeseries[0].gaugeZero.value;
					} else {
						gaugevalue = 'TBA';
							};
							
				// Check if Marke_I unit is declared
				if (result[i].timeseries[0].characteristicValues[0]?.unit) {
						MarkeIunit = result[i].timeseries[0].characteristicValues[0].unit;
					} else {
						MarkeIunit = 'TBA';
							};

                tableData.push({
					"Nr": i, //running number given by js
                    "uuid": result[i].uuid,
					"number": result[i].number,
					"shortname": result[i].shortname,
					"longname": result[i].longname,
					"km": result[i].km,
					"agency": result[i].agency,
					"longitude": result[i].longitude,
					"latitude": result[i].latitude,
					"watershort": result[i].water.shortname,
					"waterlong": result[i].water.longname,
					"timeseries_code": result[i].timeseries[0].shortname,
					"timeseries": result[i].timeseries[0].longname,
					"timeseries_unit": result[i].timeseries[0].unit,
					"equidistance": result[i].timeseries[0].equidistance,
					"timestamp": result[i].timeseries[0].currentMeasurement.timestamp,
					"currentMeasurement": result[i].timeseries[0].currentMeasurement.value,
					"trend": result[i].timeseries[0].currentMeasurement.trend,
					"stateMnwMhw": result[i].timeseries[0].currentMeasurement.stateMnwMhw,
					"stateNswHsw": result[i].timeseries[0].currentMeasurement.stateNswHsw,
					"gaugeZero_unit": gaugeunit,
					"gaugeZero": gaugevalue,
					// "valid_from": result[i].timeseries[0].gaugeZero.validFrom
					"Marke_I_unit": MarkeIunit
                });

            }
			table.appendRows(tableData);

            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
			$("#myForm").submit(function(){
        //$("#submitButton").click(function() {
			
			// When nothing selected-> {water: '666', distance: '50', radius: '10'}
    var sel1_value  = $('#sel1').val() ;
	var radio2_on_boolean = $("#inlineRadio2").is(":checked");
	// Disable geographic search when 'All waters' is selected
			console.log(radio2_on_boolean);

			
			if (sel1_value == '666'){
				var waterObj = {
					water: $('#sel1').val().trim(),
					distance: '0',
					radius: '0'
				};
			} else if (radio2_on_boolean==true) {
				var waterObj = {
					water: $('#sel1').val().trim(),
					distance: $('#customRange1').val().trim(),
					radius: $('#customRange2').val().trim()
				};
            } else if (radio2_on_boolean==false) {
				var waterObj = {
					water: $('#sel1').val().trim(),
					distance: '0',
					radius: '0'
            };	;	
			}
				
			console.log(waterObj);
            
			tableau.connectionData = JSON.stringify(waterObj); // Use this variable to pass data to your getSchema and getData functions
			
            tableau.connectionName = "Wassergauge Germany"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
