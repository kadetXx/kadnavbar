
let menuButton = document.getElementById("kad-menu-button");
let navItems = document.getElementById("kad-menu");
let barHide = document.querySelector(".kad-nav-bar-two");
let barLeft = document.querySelector(".kad-nav-bar-one");
let barRight = document.querySelector(".kad-nav-bar-three");

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("animated-kad-nav");
  barHide.classList.toggle("animated-bar-hide");
  barLeft.classList.toggle("animated-bar-cross-left");
  barRight.classList.toggle("animated-bar-cross-right");
}