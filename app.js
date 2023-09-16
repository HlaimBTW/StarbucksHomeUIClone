toggle = document.getElementById("checkbox");
nav = document.getElementById("nav-window");
toggle.addEventListener("click", () => {
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
