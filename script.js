// Toggle Menu
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav_links"); 
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const revealElements = [
  { selector: ".hero-section p", delay: 0, origin: "bottom" },
  { selector: ".hero-section h1", delay: 500, origin: "bottom" },
  { selector: ".image-box img", delay: 0, origin: "left" },
  { selector: ".about-us .section-tag", delay: 500, origin: "bottom" },
  { selector: ".content-box h2", delay: 1000, origin: "bottom" },
  { selector: ".content-box .section-info", delay: 1500, origin: "bottom" },
  { selector: ".reserve-btn-box", delay: 2000, origin: "bottom" },
  { selector: ".room-item", delay: 0, origin: "bottom", interval: 500 },
  { selector: ".facilities-list li", delay: 0, origin: "right", interval: 500 },
];

revealElements.forEach(({ selector, delay, origin, interval }) => {
  ScrollReveal().reveal(selector, { ...scrollRevealOption, delay, origin, interval });
});
