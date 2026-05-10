const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // déplacement progressif
  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform = `translateY(${55 - (move / window.innerHeight) * 100}%)`;

});

const intro = document.querySelector(".intro-text");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const start = 0;
  const end = 400;

  const progress = Math.min(scroll / end, 1);

  // zoom out + fade + montée
  const scale = 1 - progress * 0.3; // 1 → 0.7
  const translateY = progress * -80; // monte
  const opacity = 1 - progress;
  const blur = progress * 6;

  intro.style.transform = `translateY(${translateY}px) scale(${scale})`;
  intro.style.opacity = opacity;
  intro.style.filter = `blur(${blur}px)`;
});
