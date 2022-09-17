const date = document.querySelector("#date");
try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date.innerHTML = ` Last updated: <span>${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}
const year = document.querySelector("#year");
year.innerHTML = `&copy<span>${new Date().getFullYear()}</span> | Alicia Meyers | Boston`;