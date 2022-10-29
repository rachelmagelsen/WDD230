// const date = document.querySelector("#lastModified");
// try {
// 	const options = {
// 		day: "numeric",
// 		month: "numeric",
// 		year: "numeric"
// 	};
// 	date.innerHTML = `Last updated: <span>${new Date().toLocaleDateString("en-US", options)}</span>`;
// } catch (e) {
// 	alert("Error with code or your browser does not support Locale");
// }
// const year = document.querySelector("#year");
// year.innerHTML = `&copy<span>${new Date().getFullYear()}</span> | Rachel Magelsen | Washington`;

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").textContent = newDate().toLocalDateString("en-US", options);