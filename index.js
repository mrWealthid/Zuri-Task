let icon = document.getElementById("my-img");
let display = document.getElementById("uls");

document.addEventListener("DOMContentLoaded", () => {
  icon.onclick = () => {
    if (display.style.left == "100%") {
      display.style.left = "0px";
    } else {
      display.style.left = "100%";
    }
  };
});
