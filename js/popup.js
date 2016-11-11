var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".feedback-btn-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-form-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
  popup.classList.remove("feedback-form-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-form-show")) {
      popup.classList.remove("feedback-form-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
