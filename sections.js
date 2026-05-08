const headers = document.querySelectorAll(
  ".main-header, .sub-header"
);

headers.forEach(header => {

  header.addEventListener("click", () => {

    const section = header.parentElement;

    section.classList.toggle("open");

  });

});
