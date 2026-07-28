const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

const closeNavigation = () => {
  if (!siteNav || !navToggle) {
    return;
  }

  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeNavigation();
    }
  });
}
