window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nav__menu-btn").addEventListener("click", () => {
    document
      .querySelector(".nav__links--expandable")
      .classList.toggle("expanded");
  });
});
