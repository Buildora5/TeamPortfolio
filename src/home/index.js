document.addEventListener("click", (event) => {
  const button = event.target.closest(".menu-toggle");
  const link = event.target.closest(".site-nav a");

  if (button) {
    const nav = document.querySelector(".site-nav");
    const isOpen = nav.classList.toggle("nav-open");
    button.setAttribute("aria-expanded", isOpen);
  }

  if (link) {
    document.querySelector(".site-nav")?.classList.remove("nav-open");
    document
      .querySelector(".menu-toggle")
      ?.setAttribute("aria-expanded", "false");

    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.classList.remove("active");
    });

    if (!link.classList.contains("nav-button")) {
      link.classList.add("active");
    }
  }
});
