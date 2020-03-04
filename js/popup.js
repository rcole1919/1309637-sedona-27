// Popup

var open = document.querySelector(".search-btn");

var popup = document.querySelector(".form");
	
	
	open.addEventListener("click", function (evt) {
		if (popup.classList.contains("form-none")) {
			evt.preventDefault();
			popup.classList.remove("form-none");
			popup.classList.add("form-show");
		} else {
			evt.preventDefault();
			popup.classList.add("form-none");
			popup.classList.remove("form-show");
		}
	});
	