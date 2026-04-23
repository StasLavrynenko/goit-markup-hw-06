const openMenuBtn = document.querySelector(".menu-open-btn");
const closeMenuBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});