$( document ).ready(function() {
    $('#But_ID').val('1');
	$("#CM").hide();
	$("#HD").hide();
	
  $("#MD_but").click(function(){
	$('#But_ID').val('1');
    $("#MD").show();
	$("#CM").hide();
	$("#HD").hide();
	$( "#MD_but" ).removeClass( "btn-default" ).addClass( "btn-primary" );
	$( "#CM_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
	$( "#HD_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
  });
  
  $("#CM_but").click(function(){
	$('#But_ID').val('2');
    $("#CM").show();
	$("#MD").hide();
	$("#HD").hide();
	$( "#CM_but" ).removeClass( "btn-default" ).addClass( "btn-primary" );
	$( "#MD_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
	$( "#HD_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
  });
  
    $("#HD_but").click(function(){
    $('#But_ID').val('3');
    $("#HD").show();
	$("#MD").hide();
	$("#CM").hide();
	$( "#HD_but" ).removeClass( "btn-default" ).addClass( "btn-primary" );
	$( "#MD_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
	$( "#CM_but" ).removeClass( "btn-primary" ).addClass( "btn-default" );
  });

	
	// let dropdown = $('#sel1');
	const url = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/waters.json';

	// Populate dropdown with list of waters for MD/CM/HD form
	$.getJSON(url, function (data) {
		// dropdown.empty();
		$.each(data, function (key, entry) {
		// console.log( "key Data: " + key + "entry Data: " + entry.shortname  )
		$('#water_list').append("<option value=" + entry.shortname + ">" + entry.longname + "</option>"); 
	  	$('#water_list_CM').append("<option value=" + entry.shortname + ">" + entry.longname + "</option>"); 
	  	$('#water_list_HD').append("<option value=" + entry.shortname + ">" + entry.longname + "</option>"); 

	  })
	});
	



	$('#water_list_HD').change(function(){
		$('#station_list_HD option').remove();
		$('#submitButton_HD').prop('disabled', true);
		$('.inputDisabled_HD').prop('disabled', true);
		let dropdown_HD = $('#water_list_HD').val();
		const url_HD = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json?waters='+dropdown_HD+'';

		// Populate dropdown with list of waters
		$.getJSON(url_HD, function(result_HD) {
				var anzahl_HD = result_HD.length;
				$('#station_list_HD').append("<option value='000'></option>"); 
				for (var i = 0, len = anzahl_HD; i < len; i++) {
					$('#station_list_HD').append("<option value=" + result_HD[i].shortname + ">" + result_HD[i].longname + "</option>"); 
			}
		});
    });	
	
// Enaable historical search when a station is selected
	$("#station_list_HD").change(function(event){
		$(this).find('option').get(0).remove();
		var optionSelected_HD = $('#station_list_HD').find("option:selected");
		var optionSelected_value_HD  = optionSelected_HD.val();
		var today = new Date(); 
		var start_date = new Date(); 
				
		start_date.setDate(start_date.getDate() - 1);
		today = today.toString().split(' ').splice(1,4).join(' '); 
		start_date = start_date.toString().split(' ').splice(1,4).join(' '); 
		
		// Disable geographic search when 'All waters' is selected
		if (optionSelected_value_HD != '000') {
			$('.inputDisabled_HD').prop('disabled', false);
			$('#end_date_HD').val(today);
			$('#start_date_HD').val(start_date);
			$('#submitButton_HD').prop('disabled', false);
			}
			
		// Disable geographic search when no station is selected

	});
	

	$("#daysRange").change(function(event){
			var optionSelected_HD = $('#station_list_HD').find("option:selected");
			var optionSelected_value_HD  = optionSelected_HD.val();
			var today = new Date(); 
			var start_date = new Date(); 
			
			var dateOffset = $('#daysRange').val(); //5 days
			
			start_date.setDate(start_date.getDate() - dateOffset);
			today = today.toString().split(' ').splice(1,4).join(' '); 
			start_date = start_date.toString().split(' ').splice(1,4).join(' '); 
			
			// Disable geographic search when 'All waters' is selected
			if (optionSelected_value_HD != '') {
				$('.inputDisabled_HD').prop('disabled', false);
				$('#end_date_HD').val(today);
				$('#start_date_HD').val(start_date);
				$('#submitButton_HD').prop('disabled', false);
				}
		});



// Enaable geographic search when a water different than 'All waters' is selected
	$("#sel1").change(function(event){
		var optionSelected = $('#water_list').find("option:selected");
		var optionSelected_value  = optionSelected.val();
		// Disable geographic search when 'All waters' is selected
		if (optionSelected_value == '666') {
			$('.inputDisabled').prop('disabled', true);
			$('#inlineRadio1').prop('checked', true);
			}
	});


	$("#inlineRadio2").click(function(event){
		 $('.inputDisabled').prop('disabled', false);
		var optionSelected_radio2 = $('#water_list').find("option:selected");
		var optionSelected_radio2_value  = optionSelected_radio2.val();
		if (optionSelected_radio2_value == '666') {
			$('.inputDisabled').prop('disabled', true);
			$('#inlineRadio1').prop('checked', true);
			}
	});

	$("#inlineRadio1").click(function(event){
		$('.inputDisabled').prop('disabled', true);
		var optionSelected_radio = $('#water_list').find("option:selected"); 
		var optionSelected_radio_value  = optionSelected_radio.val(); 
		console.log(optionSelected_radio_value); 
		$("#water_list").val('666'); 
	});


	for (let i = 1; i < 16; i++) {
		$('#opt_'+i+'_CM').prop( "checked", true );
		$('#opt_'+i+'_CM').val('1');
		$('#opt_'+i+'_CM').click(function() {
			if ($('#opt_'+i+'_CM').is(":checked") == false) {
				$('#opt_'+i+'_CM').val('0');
			} else if ($('#opt_'+i+'_CM').is(":checked") == true) {
				$('#opt_'+i+'_CM').val('1');
						}
					});
	}


		// "shortname": "WT",
		// "longname": "WASSERTEMPERATUR ROHDATEN",
		// "shortname": "LF",
		// "longname": "ELEKTRISCHE_LEITFÄHIGKEIT_ROHDATEN",
		// "shortname": "LT",
        // "longname": "LUFTTEMPERATUR",
		// "shortname": "Q",
        // "longname": "ABFLUSS",
		// "shortname": "VA",
        // "longname": "FLIESSGESCHWINDIGKEIT",
		// "shortname": "GRU",
        // "longname": "GRUNDWASSER ROHDATEN",
		 // "shortname": "WG",
        // "longname": "WINDGESCHWINDIGKEIT",
		 // "shortname": "HL",
        // "longname": "LUFTFEUCHTE",
		// "shortname": "S",
        // "longname": "SALINITÄT",
		// "shortname": "O2",
        // "longname": "SAUERSTOFFGEHALT ROHDATEN",
		// "shortname": "TR",
        // "longname": "TRÜBUNG_ROHDATEN",
		// "shortname": "R",
        // "longname": "RICHTUNGSTROM",
		// "shortname": "WR",
        // "longname": "WINDRICHTUNG",
		// "shortname": "NIEDERSCHLAG",
        // "longname": "NIEDERSCHLAG",
		// "shortname": "NIEDERSCHLAGSINTENSITÄT",
        // "longname": "NIEDRSCHLAGSINTENSITÄT",
		// "shortname": "TP",
        // "longname": "WELLENPERIODE",
		// "shortname": "SIGH",
        // "longname": "SIGNIFIKANTEWELLENHÖHE",
		// "shortname": "MAXH",
        // "longname": "MAXIMALEWELLENHÖHE",
		 // "shortname": "PH",
        // "longname": "PH-WERT",
		// "shortname": "DFH",
        // "longname": "DURCHFAHRTSHÖHE",
		// "shortname": "CL",
        // "longname": "CHLORID",
});
