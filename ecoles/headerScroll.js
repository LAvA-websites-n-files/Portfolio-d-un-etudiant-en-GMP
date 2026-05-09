const overlay = document.querySelector(".header-overlay");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  // progression limitée
  const scale = 1 + Math.min(scrollY / 500, 1.5);

  overlay.style.transform = `scaleY(${scale})`;
});
