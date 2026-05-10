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

  const start = window.innerHeight * 0.6;
  const distance = 500;

  const progress = Math.min(
    Math.max((scroll - start) / distance, 0),
    1
  );

  // fade
  intro.style.opacity = 1 - progress;

  // zoom OUT progressif
  const scale = 1 - (progress * 0.35);
  intro.style.transform =
    `scale(${scale}) translateY(-${progress * 80}px)`;

  // léger blur pour renforcer l’effet
  intro.style.filter =
    `blur(${progress * 6}px)`;

});
