let icon = document.getElementById("icon");
let display = document.getElementById("uls");

document.addEventListener("DOMContentLoaded", () => {
  icon.onclick = () => {
    display.classList.toggle("responsive")
  };
});
