var login = document.querySelector(".login");
var hideShadow = document.querySelector(".hide_shadow");
var loginForm = document.querySelector(".login_form");
var close = document.querySelector(".close");
var summit = document.querySelector(".summit");
login.addEventListener("click", function () {
    hideShadow.style.display = 'block';
    loginForm.style.display = 'block';

}, false);
close.addEventListener("click", function () {
    hideShadow.style.display = 'none';
    loginForm.style.display = 'none';
}, false);
summit.addEventListener("click", function () {

}, false)
loginForm.addEventListener("mousedown", function (e) {
    var x = e.pageX - this.offsetLeft;
    console.log(e.pageX);
    console.log(this.offsetLeft);
    var y = e.pageY - this.offsetTop;

    var move = function (e) {

        loginForm.style.left = e.pageX - x + "px";
        loginForm.style.top = e.pageY - y + "px";
    }
    document.addEventListener("mousemove", move, false);
    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", move);
    }, false)
}, false)