var open = document.querySelector(".search-btn");

var popup = document.querySelector(".form");
	
	open.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-none");
  });