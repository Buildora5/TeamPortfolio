document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");
  const updateHeader = () =>
    header.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
  document.querySelectorAll(".ripple").forEach((button) =>
    button.addEventListener("click", (event) => {
      const wave = document.createElement("i"),
        size = Math.max(button.offsetWidth, button.offsetHeight),
        box = button.getBoundingClientRect();
      wave.className = "ripple-wave";
      wave.style.cssText = `width:${size}px;height:${size}px;left:${event.clientX - box.left - size / 2}px;top:${event.clientY - box.top - size / 2}px`;
      button.append(wave);
      wave.addEventListener("animationend", () => wave.remove());
    }),
  );
  const reveal = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          reveal.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    reveal.observe(el);
  });
  const counters = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target,
          total = +el.dataset.count,
          start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 950, 1);
          el.textContent =
            Math.floor(total * (1 - (1 - p) ** 3)) + (el.dataset.suffix || "");
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counters.unobserve(el);
      }),
    { threshold: 0.65 },
  );
  document
    .querySelectorAll("[data-count]")
    .forEach((el) => counters.observe(el));
  document
    .querySelector(".contact-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      event.currentTarget.querySelector(".form-status").textContent =
        "Thanks! Your message is ready to send.";
      event.currentTarget.reset();
    });
});
