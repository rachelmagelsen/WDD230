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
  para.textContent = "Come join us for the Chamber Meet & Greet Wednesday at 7:00 pm!";
  banner.appendChild(para);
}
  else {
    const banner = document.querySelector(".meeting");
    banner.style.display = "none"
};

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}; 


const joinDate = document.querySelector(".joinDate");

datefield.innerHTML = `${fulldate}`;

joinDate.innerHTML = `${now}`;