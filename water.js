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

	// Populate dropdown with list of waters
	$.getJSON(url, function (data) {
		// dropdown.empty();
		$.each(data, function (key, entry) {
		// console.log( "key Data: " + key + "entry Data: " + entry.shortname  )
		$('#water_list').append("<option value=" + entry.shortname + ">" + entry.longname + "</option>"); 
	  	$('#water_list_CM').append("<option value=" + entry.shortname + ">" + entry.longname + "</option>"); 

	  })
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
