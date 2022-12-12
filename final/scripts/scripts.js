const date = document.querySelector("#lastModified");
try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date.innerHTML = `<p>Last updated: ${new Date().toLocaleDateString("en-US", options)}</p>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}