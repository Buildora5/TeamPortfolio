const navToggleButton = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggleButton && navMenu) {
  navToggleButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggleButton.setAttribute("aria-expanded", String(isOpen));
    navToggleButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggleButton.setAttribute("aria-expanded", "false");
      navToggleButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}