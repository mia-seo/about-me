const menuBar = document.getElementById("menuImg");
const xBar = document.getElementById("xImg");
const toggle = document.getElementById("toggle");

function toX() {
  menuBar.style.display = "none";
  xBar.style.display = "block";
  toggle.style.display = "flex";
}

function toMenu() {
  menuBar.style.display = "block";
  xBar.style.display = "none";
  toggle.style.display = "none";
}
