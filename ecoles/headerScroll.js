const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform =
    `translateY(${55 - (move / window.innerHeight) * 100}%)`;
});

const intro = document.querySelector(".intro-text");

window.addEventListener("scroll", () => {
  const rect = intro.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let progress = 1 - (rect.top / windowHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  const scale = 1 - progress * 0.35;
  const translateY = -progress * 80;
  const opacity = 1 - progress;
  const blur = progress * 6;

  intro.style.transform = `translateY(${translateY}px) scale(${scale})`;
  intro.style.opacity = opacity;
  intro.style.filter = `blur(${blur}px)`;
});
