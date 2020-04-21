
let menuButton = document.querySelector(".kad-menu-button");
let navItems = document.querySelector(".kad-nav");
let barHide = document.querySelector(".kad-menu-bar-two");
let barLeft = document.querySelector(".kad-menu-bar-one");
let barRight = document.querySelector(".kad-menu-bar-three");

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("toggle-kad-nav");
  barHide.classList.toggle("hide-bar-two");
  barLeft.classList.toggle("cross-bar-one");
  barRight.classList.toggle("cross-bar-three");
}