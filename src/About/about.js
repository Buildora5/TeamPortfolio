document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');

  const updateHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${index * 80}ms`;
    revealObserver.observe(el);
  });

  const counters = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const total = Number(el.dataset.count) || 0;
        const suffix = el.dataset.suffix || '';
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / 950, 1);
          el.textContent = Math.floor(total * (1 - (1 - progress) ** 3)) + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        counters.unobserve(el);
      });
    },
    { threshold: 0.65 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => counters.observe(el));
});
