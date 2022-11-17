
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
  }
  const x = document.getElementById("hamburger")
  x.onclick = toggleMenu;
  
  const gridbutton = document.querySelector("#gridview");
  const listbutton = document.querySelector("#listview");
  const display = document.querySelector("article");
  
  listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
  });
  
  gridbutton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
  })