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