const drinks = document.getElementById("drinks");
let lastDrink = Number(window.localStorage.getItem("drink-date"));
let today = Date.now()
let difference = (today - lastDrink);
let time = (difference / 86,400,000)
rounded = Math.ceil(time)
localStorage.setItem("lastVisit", today);
visits.textContent = rounded;