(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema, Structure definition includes columns, alias and data type
    myConnector.getSchema = function(schemaCallback) {

	
var waterObj = JSON.parse(tableau.connectionData);

// Schema definition for Masterdata 
if (waterObj.formid==='MD'){
	console.log('MD-table, schema definition');
	console.log(waterObj.formid);

	var cols_MD = [{
        id: "Nr", //not included in datasource, placeholder for artificial running number 
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "uuid",
		description: 'Unique ID of the watergauge station',
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "number",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "shortname",
        alias: "shortname staton",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "longname",
        alias: "longname staton",
		description: 'Complete name of the station',
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
        alias: "longitude wasserpegelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "latitude",
        alias: "longitude wasserpegelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "watershort",
        alias: "water shortname",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "waterlong",
        alias: "water longname",
        dataType: tableau.dataTypeEnum.string
    }];
		// Define watergaugestations table with predefined columns
        var watergauge_table_MD = {
            id: "watergaugestations", //needs to be one word
            alias: "Watergaugestations installed in landscape of Germany",
            columns: cols_MD
        };		
	
		schemaCallback([watergauge_table_MD]);
	
	
// Schema definition for Master- (MD) and Transactionaldata (CM)
	
} else if (waterObj.formid==='CM'){
		console.log('CM-table, schema definition');
	
		// Define column by column for watergaugestations
        var cols_MD = [{
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
        alias: "shortname wasserpegelstaton",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "longname",
        alias: "longname wasserpegelstaton",
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
        alias: "longitude wasserpegelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "latitude",
        alias: "longitude wasserpegelstaton",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "watershort",
        alias: "water shortname",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "waterlong",
        alias: "water longname",
        dataType: tableau.dataTypeEnum.string
	}];	
	
		var cols_TM = [{
        id: "Nr", //not included in datasource, placeholder for artificial running number 
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "Nr_k",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "uuid",
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
		id: "gaugeZero",
        alias: "Gaugezero",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "valid_from",
        alias: "Validity of watergauge",
        dataType: tableau.dataTypeEnum.string
    }];
	
	
		var cols_CM = [{
        id: "Nr", //not included in datasource, placeholder for artificial running number 
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "Nr_cv",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "uuid",
        dataType: tableau.dataTypeEnum.string
    }, {
		id: "Code",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Characteristics",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Unit",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Value",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "Valid_from",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {	
		id: "occurrences",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {		
		id: "timespanStart",
        alias: "",
        dataType: tableau.dataTypeEnum.string
	}, {
		id: "timespanEnd",
        alias: "",
        dataType: tableau.dataTypeEnum.string
    }];	

} else if (waterObj.formid==='HD'){
	console.log('HD-table, schema definition');

	// Define column by column for watergaugestations
	var cols_HD = [{
		id: "Nr", //not included in datasource, placeholder for artificial running number 
		dataType: tableau.dataTypeEnum.string
	}, {
		id: "uuid",
		dataType: tableau.dataTypeEnum.string
	}, {
		id: "timestamp",
		dataType: tableau.dataTypeEnum.string
	}, {
		id: "waterlevel",
		dataType: tableau.dataTypeEnum.string
	}];	

	console.log('Columns definition');

	
		// Define watergaugestations table with predefined columns
        var watergauge_table_MD = {
            id: "Watergaugestations_CM", //needs to be one word
            alias: "Watergaugestations",
            columns: cols_MD
        };		
		
		// Define Timeseries table with predefined columns
        var watergauge_table_TM = {
            id: "Timeseries", //needs to be one word
            alias: "Timeseries",
            columns: cols_TM
        };	
		
		// Define Characteristics table with predefined columns
        var watergauge_table_CM = {
            id: "Characteristics", //needs to be one word
            alias: "Characteristics",
            columns: cols_CM
        };

		// Define History table with predefined columns
        var watergauge_table_HD = {
            id: "History", //needs to be one word
            alias: "Historydata",
            columns: cols_HD
        };

		console.log('Table definition');

		schemaCallback([watergauge_table_HD]);
	
	}	// Closes last if statement (HD)
    };	// Closes function used for schema definition

 


 // Get data - Navigate to the correct URI in order to download the desired data 
    myConnector.getData = function(table, doneCallback) {
		
        var waterObj = JSON.parse(tableau.connectionData),
            dateString = "waters=" + waterObj.water + "&km=" + waterObj.distance + "&radius=" + waterObj.radius,
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString;
				
		console.log(apiCall);
		console.log(waterObj.formid);
		console.log(waterObj.water);
		// console.log(waterObj.N_measure);
		

	// Navigation for CM
		if (waterObj.formid==='CM' && waterObj.water == '666' && waterObj.N_measure==14){
			apiCall = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true'
			console.log('API switch CM CM666 '+apiCall);
			}
		else if (waterObj.formid==='CM' && waterObj.water == '666' && waterObj.N_measure<14){
			dateString_CM = "timeseries="+waterObj.s_code+"&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CM;
			console.log('API switch CM CM666<14 '+apiCall);
			}	
		else if (waterObj.formid==='CM' && waterObj.water !== '666' && waterObj.N_measure==14){
			dateString_CM = "waters=" + waterObj.water + "&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CM;
			console.log('API switch CM CM!666 '+apiCall);
			}			
		else if (waterObj.formid==='CM' && waterObj.water !== '666' && waterObj.N_measure<14){
			dateString_CMM = "waters=" + waterObj.water + "&timeseries="+waterObj.s_code+"&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CMM;
			console.log('API switch CM CM!666<14 '+apiCall);
			}
			
	// Navigation for MD			
		else if (waterObj.formid==='MD' && waterObj.water !== '666'){
			dateString = "waters=" + waterObj.water + "&km=" + waterObj.distance + "&radius=" + waterObj.radius,
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString;
			console.log('API switch MD water');
			}
		else if (waterObj.formid==='MD' && waterObj.water == '666'){
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?";
			console.log('API switch MD');
			}

	// Navigation for HD			
	else if (waterObj.formid==='HD'){
		dateString_station = waterObj.uuid;
		dateString_time = waterObj.days_range;
		console.log(dateString_station);
		console.log(dateString_time);

		apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/" + dateString_station +"/W/measurements.json?start=P" + dateString_time + "D";
		console.log('API switch HD');
		console.log(apiCall);

		}


// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?timeseries=Q&includeTimeseries=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?timeseries=W,Q&includeTimeseries=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters=RHEIN&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters=RHEIN&timeseries=Q&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/BONN/W/measurements.json?start=P8D
		
		$.getJSON(apiCall, function(result) {
			var anzahl = result.length;
			var gaugevalue = "";
			var gaugeunit = "";
			var MarkeIunit = "";
                
				tableData = [];
				
        
		if (waterObj.formid==='MD'){
			for (var i = 0, len = anzahl; i < len; i++) {
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
					"waterlong": result[i].water.longname
                });
		}}
		 
		else if (waterObj.formid==='CM'){
			if (table.tableInfo.id == "Watergaugestations_CM") {

				// Iterate over the JSON object
				for (var i = 0, len = anzahl; i < len; i++) {
					var TM_anzahl = result[i].timeseries.length;		
								
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
							"waterlong": result[i].water.longname
						});		
					}
				}			
			
			if (table.tableInfo.id == "Timeseries") {

				// Iterate over the JSON object
				for (var i = 0, len = anzahl; i < len; i++) {
					var TM_anzahl = result[i].timeseries.length;

					for (var k = 0, len_TM = TM_anzahl; k < len_TM; k++) {
					
						// Check if gauge unit is declared
						if (result[i].timeseries[0].gaugeZero?.unit) {
								gaugeunit = result[i].timeseries[0].gaugeZero.unit;
							} else {
								gaugeunit = 'TBA';
									};
						
						// Check if gauge value is declared
						if (result[i].timeseries[0].gaugeZero?.value) {
								gaugevalue = result[i].timeseries[0].gaugeZero.value;
							} else {
								gaugevalue = 'TBA';
									};
						// Check if gaugezero validity is declared
						if (result[i].timeseries[0].gaugeZero?.validFrom) {
								gaugevalid = result[i].timeseries[0].gaugeZero.validFrom;
							} else {
								gaugevalid = 'TBA';
									};			
								

						tableData.push({
							"Nr": i, //running number given by js
							"Nr_k": k, //running number given by js
							"uuid": result[i].uuid,
							
							// Timeseries data push
							"timeseries_code": result[i].timeseries[k].shortname,
							"timeseries": result[i].timeseries[k].longname,
							"timeseries_unit": result[i].timeseries[k].unit,
							"equidistance": result[i].timeseries[k].equidistance,
							"timestamp": result[i].timeseries[k].currentMeasurement.timestamp,
							"currentMeasurement": result[i].timeseries[k].currentMeasurement.value,
							"trend": result[i].timeseries[k].currentMeasurement.trend,
							"stateMnwMhw": result[i].timeseries[k].currentMeasurement.stateMnwMhw,
							"stateNswHsw": result[i].timeseries[k].currentMeasurement.stateNswHsw,
							"gaugeZero": gaugevalue + ' ' + gaugeunit,
							"valid_from": gaugevalid
						});		
					}
				}
			}
			
			if (table.tableInfo.id == "Characteristics") {

				// Iterate over the JSON object
				for (var i = 0, len = anzahl; i < len; i++) {
					var TM_anzahl = result[i].timeseries.length;
					var CV_anzahl = result[i].timeseries[0].characteristicValues.length;
						
						for (var cv = 0, len_CV = CV_anzahl; cv < len_CV; cv++) {	
							tableData.push({
								"Nr": i, //running number given by js
								"Nr_k": k, //running number given by js
								"Nr_cv": cv,
								"uuid": result[i].uuid,
								
								// Characteristic data push
								"Code":result[i].timeseries[0].characteristicValues[cv].shortname,
								"Characteristics": result[i].timeseries[0].characteristicValues[cv].longname,
								"Unit": result[i].timeseries[0].characteristicValues[cv].unit,
								"Value": result[i].timeseries[0].characteristicValues[cv].value,
								"Valid_from": result[i].timeseries[0].characteristicValues[cv].validFrom,
								"occurrences": result[i].timeseries[0].characteristicValues[cv].occurrences,
								"timespanStart": result[i].timeseries[0].characteristicValues[cv].timespanStart,
								"timespanEnd": result[i].timeseries[0].characteristicValues[cv].timespanEnd
							});
						}
					
				}
			}
		
        } // Close if CM

		else if (waterObj.formid==='HD'){
			for (var i = 0, len = anzahl; i < len; i++) {
                tableData.push({
					"Nr": i, //running number given by js
                    "uuid": waterObj.uuid,
					"timestamp": result[i].timestamp,
					"waterlevel": result[i].value
                });
		}}
			
			
			table.appendRows(tableData);

            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);



    // Create event listeners for when the user submits the form
    $(document).ready(function() {

		// click event for submit button used for MD data
			$("#submitButton").on('click',function(){
				//$("#submitButton").click(function() {
				// When nothing selected-> {water: '666', distance: '50', radius: '10'}
				var sel1_value  = $('#water_list').val() ;
				var radio2_on_boolean = $("#inlineRadio2").is(":checked");
				// Disable geographic search when 'All waters' is selected
				console.log(radio2_on_boolean);
				console.log(sel1_value);
				tableau.log($('#FormID').val());
			
			if (sel1_value == '666'){
				var waterObj = {
					water: $('#water_list').val().trim(),
					distance: '0',
					radius: '0',
					formid: $('#FormID').val()
				};
			} else if (radio2_on_boolean==true) {
				var waterObj = {
					water: $('#water_list').val().trim(),
					distance: $('#customRange1').val().trim(),
					radius: $('#customRange2').val().trim(),
					formid: $('#FormID').val()
				};
            } else if (radio2_on_boolean==false) {
				var waterObj = {
					water: $('#water_list').val().trim(),
					distance: '0',
					radius: '0',
					formid: $('#FormID').val()
            };		
			}
				
			console.log(waterObj);
            tableau.connectionData = JSON.stringify(waterObj); // Use this variable to pass data to your getSchema and getData functions

            tableau.connectionName = "Wassergaugestations Germany (Master data)"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
		
		
		// click event for submit button used for CM data
		$("#submitButton_CM").on('click',function(){
			console.log($('#FormID_CM').val());
			
			var N_measure = 0;
			var s_code = '';
			var code_string = '';
			for (let i = 1; i < 15; i++) {
				if ($('#opt_'+i+'_CM').val() == '1') {
					tableau.log($('#opt_'+i+'_CM'));
					tableau.log($('#opt_'+i+'_CM').val());

					N_measure = N_measure+1
					switch (i) {
					  case 1:
						s_code = "WT";
						break;
					  case 2:
						s_code = "VA";
						break;
					  case 3:
						 s_code = "GRU";
						break;
					  case 4:
						s_code = "Q";
						break;
					  case 5:
						s_code = "TR";
						break;
					  case 6:
						s_code = "W";
						break;
					  case 7:
						s_code = "DFH";
						break;
					  case 8:
						s_code = "WG";
						break;
					  case 9:
						s_code = "WR";
						break;
					  case 10:
						 s_code = "CL";
						break;
					  case 11:
						s_code = "MAXH";
						break;
					  case 12:
						s_code = "NIEDEERSCHLAG";
						break;
					  case 13:
						s_code = "HL";
						break;
					  case 14:
						s_code = "LT";
					  case 15:
						s_code = "S";		// Scheint ein Fehler zu geben beim Auswählen von S solo measure				
					};
					
					code_string += s_code + ",";
				};
			}
			
			// Deelete commata in the end
			if (code_string.length > '1') {
				code_string = code_string.slice(0, -1);
			} 
			
				var waterObj = {
					water: $('#water_list_CM').val().trim(),
					N_measure: N_measure,
					formid: $('#FormID_CM').val(),
					m_code: $('#multiple_select_CM').val(),
					s_code: code_string
										
				};
					
			tableau.connectionData = JSON.stringify(waterObj); // Use this variable to pass data to your getSchema and getData functions
			tableau.connectionName = "Watergauge Germany (Master and transactional data)"; // This will be the data source name in Tableau
			tableau.submit(); // This sends the connector object to Tableau
		});

		
		// click event for submit button used for HD data
		$("#submitButton_HD").on('click',function(){
			//$("#submitButton").click(function() {
			// When nothing selected-> {water: '666', distance: '50', radius: '10'}
			var water_HD_value  = $('#water_list_HD').val() ;
			var station_HD_value  = $('#station_list_HD').val() ;
			//var station_HD_text = $('#station_list_HD').html();
			// var station_HD_class = $('#station_list_HD option: selected').text();
			//station_HD_text = station_HD_text.find(station_HD_value);

			// Disable geographic search when 'All waters' is selected
			tableau.log(water_HD_value);
			tableau.log(station_HD_value);
			tableau.log($('#FormID_HD').val());
			tableau.log($('#daysRange').val().trim());

			var waterObj = {
				water: water_HD_value.trim(),
				uuid: station_HD_value.trim(),
				formid: $('#FormID_HD').val(),
				//class: station_HD_class,
				//station: station_HD_text,
				days_range: $('#daysRange').val().trim()
			};
	
		
			
		console.log(waterObj);
		tableau.connectionData = JSON.stringify(waterObj); // Use this variable to pass data to your getSchema and getData functions

		tableau.connectionName = "Wassergaugestations Germany (History data)"; // This will be the data source name in Tableau
		tableau.submit(); // This sends the connector object to Tableau
	});
	
		
    });
})();

