// start header
let toggle_menu = document.querySelector(".toggle-menu");
// start header
let btn = document.querySelector(".toggle-menu");
let ul = document.querySelector("nav ul");

btn.addEventListener("click", function() {
    btn.classList.toggle("fa-xmark");
    ul.classList.toggle("active");
});
// end header

// start footer

let year = new Date();
let spanDate = document.querySelector(".date");

spanDate.innerHTML = year.getFullYear();
// end footer