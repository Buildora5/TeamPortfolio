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

const aboutHighlights = document.querySelectorAll(".about-highlights article");

if (aboutHighlights.length && "IntersectionObserver" in window) {
  const highlightObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  aboutHighlights.forEach((card) => highlightObserver.observe(card));
} else {
  aboutHighlights.forEach((card) => card.classList.add("is-visible"));
}
