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

  const start = 150;
  const distance = 400;

  const progress = Math.min(
    Math.max((scroll - start) / distance, 0),
    1
  );

  // disparition
  intro.style.opacity = 1 - progress;

  // légère montée
  intro.style.transform =
    `translateY(-${progress * 60}px)`;

  // blur progressif
  intro.style.filter =
    `blur(${progress * 8}px)`;

  // réduction de l'espace
  intro.style.marginBottom =
    `${200 - (progress * 180)}px`;

});
