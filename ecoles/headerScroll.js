const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // déplacement progressif
  const move = Math.min(scroll * 0.35, window.innerHeight * 0.55);

  gradient.style.transform = `translateY(${55 - (move / window.innerHeight) * 100}%)`;

});
