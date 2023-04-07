"use strict";

const sectionsHidden = document.querySelectorAll(".section-hidden");

const sectionObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;

    console.log(entry.target);
    console.log(entry.isIntersecting);
    if (!entry.isIntersecting) return;

    const target = entry.target;
    target.classList.remove("section-hidden");
    target.classList.add("animate");

    observer.unobserve(target);
  },
  {
    root: null,
    rootMargin: "-200px",
    // threshold: 0,
  }
);

[...sectionsHidden].forEach((mov) => sectionObserver.observe(mov));
