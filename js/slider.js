$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 3700,
      values: [ 0, 3000 ],
      slide: function( event, ui ) {
        $( "#amount-min" ).val( "От " + ui.values[ 0 ] );
				$( "#amount-max" ).val( "До " + ui.values[ 1 ] );
      }
    });
    $( "#amount-min" ).val( "От " + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount-max" ).val( "До " + $( "#slider-range" ).slider( "values", 1 ) );
  } );