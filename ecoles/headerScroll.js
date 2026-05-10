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

  // début disparition
  const start = 200;

  // durée
  const distance = 400;

  const progress = Math.min(
    Math.max((scroll - start) / distance, 0),
    1
  );

  intro.style.opacity = 1 - progress;

  intro.style.transform =
    `translateY(-${progress * 80}px)`;

  intro.style.filter =
    `blur(${progress * 6}px)`;

});
