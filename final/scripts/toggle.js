// // select the elements to manipulate (output to)
// const datefield = document.querySelector(".date");

// // derive the current date using a date object
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );
// datefield.innerHTML = `${fulldate}`;

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

const hambutton = document.querySelector('.btn');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
