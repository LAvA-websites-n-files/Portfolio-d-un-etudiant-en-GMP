const skills = document.querySelectorAll(".skill");

let activeSkill = null;

skills.forEach(skill => {

const skills = document.querySelectorAll(".skill");
let activeSkill = null;

skills.forEach(skill => {

  const main = skill.querySelector(".skill-main");
  const sub = skill.querySelector(".skill-sub");
  const items = skill.querySelectorAll(".sub-item");

  // largeur uniforme sous-compétences
  let maxWidth = 0;

  items.forEach(item => {
    item.style.width = "auto";
    maxWidth = Math.max(maxWidth, item.offsetWidth);
  });

  items.forEach(item => {
    item.style.width = maxWidth + "px";
  });

  // CLICK
  main.addEventListener("click", () => {

    // reclique → fermeture
    if (activeSkill === skill) {
      closeSkill(skill);
      activeSkill = null;
      return;
    }

    // ferme ancienne
    if (activeSkill) {
      closeSkill(activeSkill);
    }

    // ouvre nouvelle
    openSkill(skill);
    activeSkill = skill;
  });

  // OUVERTURE
  function openSkill(skill) {

    const main = skill.querySelector(".skill-main");
    const sub = skill.querySelector(".skill-sub");

    skill.classList.add("active");

    const viewportWidth = window.innerWidth;

    const subWidth = items[0].offsetWidth;
    const subHeight = sub.scrollHeight;

    const marginRight = 20;
    const gap = 20;

    // largeur finale bulle
    const availableWidth =
      viewportWidth
      - subWidth
      - gap
      - marginRight
      - 20;

    main.style.width = `${availableWidth}px`;

    // hauteur identique aux sous-compétences
    main.style.height = `${subHeight}px`;

    // position actuelle
    const rect = main.getBoundingClientRect();

    // déplacement vers droite
    const shift =
      viewportWidth
      - availableWidth
      - marginRight
      - rect.left;

    main.style.transform = `translateX(${shift}px)`;

    // apparition sous-compétences après déplacement
    setTimeout(() => {
      skill.classList.add("show-sub");
    }, 500);
  }

  // FERMETURE
  function closeSkill(skill) {

    const main = skill.querySelector(".skill-main");

    skill.classList.remove("show-sub");

    setTimeout(() => {

      main.style.transform = "";
      main.style.width = "";
      main.style.height = "";

      skill.classList.remove("active");

    }, 400);
  }

});  

});
