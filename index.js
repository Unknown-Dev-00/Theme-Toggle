const toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
};