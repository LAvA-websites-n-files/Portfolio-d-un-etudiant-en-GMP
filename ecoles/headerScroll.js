const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // déplacement progressif
  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform = `translateY(${55 - (move / window.innerHeight) * 100}%)`;

});
const intro = document.querySelector(".intro-text");

window.addEventListener("scroll", () => {
  const rect = intro.getBoundingClientRect();

  // distance entre le haut de l'écran et l'élément
  const windowHeight = window.innerHeight;

  // progression basée sur l'entrée dans l'écran
  let progress = 1 - (rect.top / windowHeight);

  progress = Math.min(Math.max(progress, 0), 1);

  const scale = 1 - progress * 0.35;
  const translateY = -progress * 120;
  const opacity = 1 - progress;
  const blur = progress * 6;

  intro.style.transform = `translateY(${translateY}px) scale(${scale})`;
  intro.style.opacity = opacity;
  intro.style.filter = `blur(${blur}px)`;
});
