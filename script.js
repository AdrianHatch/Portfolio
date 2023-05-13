window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});



const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("change");
});

