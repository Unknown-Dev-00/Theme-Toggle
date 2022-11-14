const toggle = document.getElementById("theme-toggle");

document
  .querySelector("#theme-toggle")
  .addEventListener("change", function (event){
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
};
