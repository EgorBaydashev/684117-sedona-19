var popupFailure = document.querySelector(".failure-popup");
var form = document.querySelector("form");
var name = form.querySelector("[name=name-name]");
var surname = form.querySelector("[name=name-surname]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (!name.value || !surname.value || !tel.value || !email.value) {
    evt.preventDefault();
    popupFailure.classList.remove("failure-close");
    popupFailure.classList.add("failure-show");
  }
});
