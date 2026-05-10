const gradient = document.querySelector(".header-gradient");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  // vitesse du dégradé
  const move = Math.min(scroll * 0.8, window.innerHeight * 0.6);

  gradient.style.transform = `translateY(-${move}px)`;

});
