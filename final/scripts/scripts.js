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