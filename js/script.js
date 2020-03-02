// Slider 

$( function() {
    $( "#slider-range" ).slider({
      range: true,
			min: 0,
      max: 3700,
			step: 50,
      values: [ 0, 3000 ],
      slide: function( event, ui ) {
        $( "#amount-min" ).val( "От " + ui.values[ 0 ] );
				$( "#amount-max" ).val( "До " + ui.values[ 1 ] );
      }
    });
    $( "#amount-min" ).val( "От " + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount-max" ).val( "До " + $( "#slider-range" ).slider( "values", 1 ) );
  } );
	
// Datepicker 

$( function() {
    $( "#datepicker-1" ).datepicker();
  } );
	
$( function() {
    $( "#datepicker-2" ).datepicker();
  } );
	

// Popup

var open = document.querySelector(".search-btn");

var popup = document.querySelector(".form");
	
	open.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-none");
  });
	

// Input[number]

$(function() {

  (function quantityProducts() {
    var $quantityAdultMinus = $(".quantity-adult-minus");
    var $quantityAdultPlus = $(".quantity-adult-plus");
    var $quantityNumAdult = $(".quantity-num-adult");
		
		var $quantityChildMinus = $(".quantity-child-minus");
    var $quantityChildPlus = $(".quantity-child-plus");
		var $quantityNumChild = $(".quantity-num-child");

    $quantityAdultMinus.click(quantityAdultMinus);
    $quantityAdultPlus.click(quantityAdultPlus);
		
		$quantityChildMinus.click(quantityChildMinus);
    $quantityChildPlus.click(quantityChildPlus);


    function quantityAdultMinus() {
      if ($quantityNumAdult.val() > 0) {
        $quantityNumAdult.val(+$quantityNumAdult.val() - 1);
      }
    }

    function quantityAdultPlus() {
      $quantityNumAdult.val(+$quantityNumAdult.val() + 1);
    }
		
		function quantityChildMinus() {
      if ($quantityNumChild.val() > 0) {
        $quantityNumChild.val(+$quantityNumChild.val() - 1);
      }
    }

    function quantityChildPlus() {
      $quantityNumChild.val(+$quantityNumChild.val() + 1);
    }
  })();

});


