// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `${fulldate}`;

const date = document.querySelector("#lastModified");
try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	};
	date.innerHTML = `Last updated: <span>${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

const hambutton = document.querySelector('.btn');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const day = new Date().getDay();

if (day == 1 || day == 2) {
    const banner = document.querySelector(".meeting");
    let para = document.createElement("p");
    para.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 pm";
    banner.appendChild(para);
}