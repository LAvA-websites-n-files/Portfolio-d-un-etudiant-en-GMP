const gradient = document.querySelector(".header-gradient");

if (gradient) {
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

    gradient.style.transform =
      `translateY(${55 - (move / window.innerHeight) * 100}%)`;
  });
}

const intro = document.querySelector(".intro-text");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const start = 0;
  const end = 400;

  let progress = (scroll - start) / (end - start);
  progress = Math.min(Math.max(progress, 0), 1);

  const scale = 1 - progress * 0.2;
  const translateY = -progress * 60;
  const opacity = 1 - progress;
  const blur = progress * 4;

  intro.style.transform = `translateY(${translateY}px) scale(${scale})`;
  intro.style.opacity = opacity;
  intro.style.filter = `blur(${blur}px)`;
});
