const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // déplacement progressif
  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform = `translateY(${55 - (move / window.innerHeight) * 100}%)`;

});

const intro = document.querySelector(".intro-text");
const introContainer = document.querySelector(".intro-container");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  const start = window.innerHeight * 0.8;
  const distance = 400;

  const progress = Math.min(
    Math.max((scroll - start) / distance, 0),
    1
  );

  // fade
  intro.style.opacity = 1 - progress;

  // montée
  intro.style.transform =
    `translateY(-${progress * 100}px)`;

  // blur
  intro.style.filter =
    `blur(${progress * 8}px)`;

  // réduction réelle de l'espace
  introContainer.style.height =
    `${500 - (progress * 420)}px`;

});
