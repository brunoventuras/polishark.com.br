(() => {
  const config = window.POLISHARK_CONFIG || {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    const message = link.dataset.message || config.defaultMessage || "Olá!";
    link.href = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
  });

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:+${config.whatsapp}`;
    if (link.hasAttribute("data-phone-display")) link.textContent = config.phoneDisplay;
  });

  document.querySelectorAll("[data-instagram-link]").forEach((link) => {
    link.href = config.instagram;
  });

  document.querySelectorAll("[data-address]").forEach((node) => {
    node.innerHTML = config.addressHtml;
  });

  const toggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  const header = document.querySelector("[data-header]");
  if (header) {
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const revealNodes = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealNodes.forEach((node) => observer.observe(node));
})();
