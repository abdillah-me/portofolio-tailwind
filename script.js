// humberger menu
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");
humberger.addEventListener("click", () => {
   humberger.classList.toggle("humberger-active");
   navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = () => {
   const header = document.querySelector("header");
   const fixedNav = header.offsetTop;
   if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fix");
   } else {
      header.classList.remove("navbar-fix");
   }
};
