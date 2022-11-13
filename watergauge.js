(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();



    // Define the schema, Structure definition includes columns, alias and data type
    myConnector.getSchema = function(schemaCallback) 
	{	
		var waterObj = JSON.parse(tableau.connectionData);

		if (waterObj.formid==='MD')
		{
			console.log('MD-table, schema definition');
			console.log(waterObj.formid);

			var cols_MD = [{
			//	id: "Nr", //not included in datasource, placeholder for artificial running number 
			//	dataType: tableau.dataTypeEnum.string
			//}, {
				id: "uuid",
				alias: "UUID",
				description: "Unique station ID",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "number",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "shortname",
				alias: "staton shortname",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "longname",
				alias: "staton longname ",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "km",
				alias: "km",
				description: "distance from river origin in km",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "agency",
				description: "Waterways and Shipping Office in Germany",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "longitude",
				alias: "longitude staton",
				description: "longitude in WGS84",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "latitude",
				alias: "longitude staton",
				description: "latitude in WGS84",
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
				alias: "Watergaugestations",
				description: "Please find here master data for all stations in Germany",
				columns: cols_MD
			};		
	
			schemaCallback([watergauge_table_MD]);
	
		} // Close first IF-Statements
		else if (waterObj.formid==='CM')
		{
			console.log('CM-tables, schema definition');
	
		// Define column by column for watergaugestations
			var cols_MD = [{
			//	id: "Nr", //not included in datasource, placeholder for artificial running number 
			//	dataType: tableau.dataTypeEnum.string
			//}, {
				id: "uuid",
				alias: "UUID",
				description: "Unique station ID",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "number",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "shortname",
				alias: "staton shortname",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "longname",
				alias: "station longname",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "km",
				alias: "km",
				description: "distance from river origin in km",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "agency",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "longitude",
				alias: "longitude staton",
				description: "longitude in WGS84",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "latitude",
				alias: "latitude staton",
				description: "latitude in WGS84",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "watershort",
				alias: "water shortname",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "waterlong",
				alias: "water longname",
				dataType: tableau.dataTypeEnum.string
			}];	// Close first column variable
	
			var cols_TM = [{
			//	id: "Nr", //not included in datasource, placeholder for artificial running number 
			//	dataType: tableau.dataTypeEnum.string
			//}, {
			//	id: "Nr_k",
			//	dataType: tableau.dataTypeEnum.string
			//}, {
				id: "uuid",
				alias: "UUID",
				description: "Unique station ID",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "timeseries_code",
				description: "Code of timeseries measurement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "timeseries",
				description: "Name of timeseries measurement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "timeseries_unit",
				description: "Unit of timeseries measurement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "equidistance",
				description: "Distance of the measured values in minutes",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "timestamp",
				alias: "Timestamp of current measurement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "currentMeasurement",
				alias: "Current Measurement",
				dataType: tableau.dataTypeEnum.float,
				aggType: tableau.dataTypeEnum.avg,
			}, {
				id: "trend",
				description: "Code of Trend of water movement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "trend_describe",
				description: "Describes the Code of Trend of water movement",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "stateMnwMhw",
				description: "Relation between Mnw and Mhw",
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
				description: "Validity of watergauge",
				dataType: tableau.dataTypeEnum.date
			}]; 	// Close second column variable
	
	
			var cols_CM = [{
			//	id: "Nr", //not included in datasource, placeholder for artificial running number 
			//	dataType: tableau.dataTypeEnum.string
			//}, {
			//	id: "Nr_cv",
			//	dataType: tableau.dataTypeEnum.string
			//}, {
				id: "uuid",
				alias: "UUID",
				description: "Unique station ID",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "Code",
				alias: "Code",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "Characteristics",
				alias: "Characteristics name",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "Unit",
				alias: "",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "Value",
				alias: "",
				dataType: tableau.dataTypeEnum.float
			}, {
				id: "Valid_from",
				alias: "",
				dataType: tableau.dataTypeEnum.date
			}, {	
				id: "occurrences",
				alias: "",
				dataType: tableau.dataTypeEnum.string
			}, {		
				id: "timespanStart",
				alias: "",
				dataType: tableau.dataTypeEnum.date
			}, {
				id: "timespanEnd",
				alias: "",
				dataType: tableau.dataTypeEnum.date
			}];		// Close third column variable
	
			// Define watergaugestations table with predefined columns
			var watergauge_table_MD = {
				id: "Watergaugestations_CM", //needs to be one word
				alias: "Watergaugestations",
				description: "Please find here master data for all stations in Germany",

				columns: cols_MD
			};		
			
			// Define Timeseries table with predefined columns
			var watergauge_table_TM = {
				id: "Timeseries", //needs to be one word
				alias: "Timeseries",
				description: "Please find here transactional data for timeseries measurements",
				columns: cols_TM
			};	
			
			// Define Characteristics table with predefined columns
			var watergauge_table_CM = {
				id: "Characteristics", //needs to be one word
				alias: "Characteristics",
				description: "Please find here transactional data for characteristics",
				columns: cols_CM
			};
		
			schemaCallback([watergauge_table_MD, watergauge_table_TM, watergauge_table_CM]);
	
		}	// Close second IF-Statements
		
		else if (waterObj.formid==='HD')
		{
			console.log('HD-table, schema definition');

			// Define column by column for watergaugestations
			var cols_HD = [{
			//	id: "Nr", //not included in datasource, placeholder for artificial running number 
			//	dataType: tableau.dataTypeEnum.string
			//}, {
				id: "uuid",
				alias: "station shortname",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "inc_info",
				alias: "increment info",
				dataType: tableau.dataTypeEnum.string
			}, {
				id: "timestamp",
				dataType: tableau.dataTypeEnum.datetime
			}, {
				id: "waterlevel",
				dataType: tableau.dataTypeEnum.float,
				//aggType: avg
			}];	

			console.log('HD Schema/Columns definition completed');
			


			// Define Incremental History table with predefined columns
			var watergauge_table_HD_Inc = {
				id: "History_Inc", //needs to be one word
				alias: "Historical data (Load: Intial/Incremental)",
				description: "Please find here historical watergauge data - only one station at a time can be requested. The data can be loaded as initial load and in addition to that also incremental load is possible, please refresh the extract as incremental refresh for that.",
				columns: cols_HD,
				incrementColumnId: "timestamp"
			};			

			console.log('Table definition');

			schemaCallback([watergauge_table_HD_Inc]);
		}	// Closes last if statement (HD)	

    }; // Closes schemacallback


//--------------Get data section-----------------------
 // Navigate to the correct URI in order to download the desired data 
    myConnector.getData = function(table, doneCallback) 
	{
		// var last_timestamp = parseInt(table.incrementValue || -1);
		var last_timestamp = table.incrementValue;

        var waterObj = JSON.parse(tableau.connectionData),
            dateString = "waters=" + waterObj.water + "&km=" + waterObj.distance + "&radius=" + waterObj.radius,
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString;
			
			console.log(last_timestamp);
			console.log(apiCall);
			console.log(waterObj.formid);
			console.log(waterObj.water);
			console.log(waterObj.N_measure);
		
	// Navigation for CM-data-> select the correct REST-API
		if (waterObj.formid==='CM' && waterObj.water == '666' && waterObj.N_measure==14){
			apiCall = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true'
			console.log('CM666 '+apiCall);
			}
		else if (waterObj.formid==='CM' && waterObj.water == '666' && waterObj.N_measure<14){
			dateString_CM = "timeseries="+waterObj.s_code+"&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CM;
			console.log('CM666<14 '+apiCall);
			}	
		else if (waterObj.formid==='CM' && waterObj.water !== '666' && waterObj.N_measure==14){
			dateString_CM = "waters=" + waterObj.water + "&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CM;
			console.log('CM!666 '+apiCall);
			}			
		else if (waterObj.formid==='CM' && waterObj.water !== '666' && waterObj.N_measure<14){
			dateString_CMM = "waters=" + waterObj.water + "&timeseries="+waterObj.s_code+"&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true",
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString_CMM;
			console.log('CM!666<14 '+apiCall);
			}
			
	// Navigation for MD-data-> select the correct REST-API			
		else if (waterObj.formid==='MD' && waterObj.water !== '666'){
			dateString = "waters=" + waterObj.water + "&km=" + waterObj.distance + "&radius=" + waterObj.radius,
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?" + dateString;
			console.log('switch MD water');
			}
		else if (waterObj.formid==='MD' && waterObj.water == '666'){
            apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?";
			console.log('switch MD');
			}

//----------------
	// Navigation for HD-data-> select the correct REST-API			
		else if (waterObj.formid==='HD'){
			dateString_station = waterObj.uuid;
			dateString_time = waterObj.days_range;
			console.log(dateString_station);
			console.log(dateString_time);

			apiCall = "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/" + dateString_station +"/W/measurements.json?start=P" + dateString_time + "D";
			console.log('API switch HD');
			console.log(apiCall);

			}

//------------
// Different REST-API URLs
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?timeseries=Q&includeTimeseries=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?timeseries=W,Q&includeTimeseries=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters=RHEIN&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters=RHEIN&timeseries=Q&includeTimeseries=true&includeCurrentMeasurement=true&includeCharacteristicValues=true
// https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/BONN/W/measurements.json?start=P8D
//---------------------
		
		// Call the determined REST-API from navigation part and load data
		$.getJSON(apiCall, function(result) {
			var anzahl = result.length;
			var gaugevalue = "";
			var gaugeunit = "";
			var MarkeIunit = "";
        // Initiate empty array        
			tableData = [];

			if (waterObj.formid==='MD'){
				for (var i = 0, len = anzahl; i < len; i++) {
				// Push the MD-data in array		       
					tableData.push({
						//"Nr": i, //running number given by js
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
								//"Nr": i, //running number given by js
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
							
							// Split trend code into text
							if (result[i].timeseries[k].currentMeasurement.trend = '1') {
								trend_description = 'Increasing water'
								} else if (result[i].timeseries[k].currentMeasurement.trend = '0') {
									trend_description = 'Constant water'
								} else if (result[i].timeseries[k].currentMeasurement.trend = '-1') {
									trend_description = 'Decreasing water'
								} else {
									trend_description = 'Not determined'
								}	;		

							tableData.push({
								//"Nr": i, //running number given by js
								//"Nr_k": k, //running number given by js
								"uuid": result[i].uuid,
								
								// Timeseries data push
								"timeseries_code": result[i].timeseries[k].shortname,
								"timeseries": result[i].timeseries[k].longname,
								"timeseries_unit": result[i].timeseries[k].unit,
								"equidistance": result[i].timeseries[k].equidistance,
								"timestamp": result[i].timeseries[k].currentMeasurement.timestamp,
								"currentMeasurement": result[i].timeseries[k].currentMeasurement.value,
								"trend": result[i].timeseries[k].currentMeasurement.trend,
								"trend_describe": trend_description,
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
									//"Nr": i, //running number given by js
									//"Nr_k": k, //running number given by js
									//"Nr_cv": cv,
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
			//Initial and incremental fork 

			if (!last_timestamp){

				for (var i = 0, len = anzahl; i < len; i++) {
					tableData.push({
						//"Nr": i, //running number given by js
						"uuid": waterObj.uuid,
						"inc_info": 'Initial load',
						"timestamp": result[i].timestamp,
						"waterlevel": result[i].value
					});
				}
			}
			else if (last_timestamp){


				for (var i = 0, len = anzahl; i < len; i++) {
					if (result[i].timestamp > last_timestamp){
						tableData.push({
							//"Nr": i, //running number given by js
							"uuid": waterObj.uuid,
							"inc_info": 'Increment',
							"timestamp": result[i].timestamp,
							"waterlevel": result[i].value

						});
					}
				}
			}

		}
			
		var row_index = 0;
		var size = 100;
		while (row_index < tableData.length){
			 table.appendRows(tableData.slice(row_index, size + row_index));
			 row_index += size;
			 tableau.reportProgress("GETTING ROW: " + row_index +'DATA: ' + waterObj.formid);
		 }

			

            doneCallback();
        });
    };
	
//---Get data section completed-----------------------------------

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

            tableau.connectionName = "Watergaugestations (Master data)"; // This will be the data source name in Tableau
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
			tableau.connectionName = "Watergauge (Master/Transactional data)"; // This will be the data source name in Tableau
			tableau.submit(); // This sends the connector object to Tableau
		});
		
//------------

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

		tableau.connectionName = "Watergauge (Historical data)"; // This will be the data source name in Tableau
		tableau.submit(); // This sends the connector object to Tableau
	});

//---------------
	
		
    });
})();


