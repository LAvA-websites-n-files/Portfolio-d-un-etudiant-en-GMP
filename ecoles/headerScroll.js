const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // déplacement progressif
  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform = `translateY(${55 - (move / window.innerHeight) * 100}%)`;

});

const intro = document.querySelector(".intro-text");
const wrapper = document.querySelector(".intro-wrapper");

window.addEventListener("scroll", () => {

  const rect = wrapper.getBoundingClientRect();

  const progress = Math.min(
    Math.max(-rect.top / rect.height, 0),
    1
  );

  intro.style.opacity = 1 - progress;

  intro.style.transform =
    `translateY(-${progress * 120}px)`;

  intro.style.filter =
    `blur(${progress * 10}px)`;

});
