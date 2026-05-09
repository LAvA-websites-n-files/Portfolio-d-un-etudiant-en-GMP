const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // limite la progression
  const maxScroll = window.innerHeight;

  // progression entre 0 et 1
  const progress = Math.min(scroll / maxScroll, 1);

  // le dégradé monte progressivement
  const newHeight = 25 + (progress * 75);

  gradient.style.height = `${newHeight}%`;

});
