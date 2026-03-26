/* MENU TOGGLE */

const menu = document.getElementById("menu");
const openBtn = document.getElementById("openMenu");

openBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
  menu.classList.remove("active");
});


/* SCROLL ANIMATION */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{
  threshold:0.2
});

document.querySelectorAll(".card")
.forEach(el => observer.observe(el));