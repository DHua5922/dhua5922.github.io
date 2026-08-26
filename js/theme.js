const themeLocalStorageKey = "theme";
const themeDataAttribute = "data-theme";

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", toggleTheme);

  loadTheme();
});

function toggleTheme() {
  const newTheme = loadTheme() === "dark" ? "light" : "dark";

  localStorage.setItem(themeLocalStorageKey, newTheme);
  loadTheme();
}

function loadTheme() {
  const savedTheme = localStorage.getItem(themeLocalStorageKey);

  if (savedTheme) {
    document.documentElement.setAttribute(themeDataAttribute, savedTheme);
  }

  return savedTheme;
}
