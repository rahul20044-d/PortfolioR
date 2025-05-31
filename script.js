const toggleButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-links a");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
