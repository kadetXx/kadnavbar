
let menuButton = document.querySelector(".kad-menu-button");
let navItems = document.querySelector(".kad-nav");
let barHide = document.querySelector(".kad-menu-bar-two");
let barLeft = document.querySelector(".kad-menu-bar-one");
let barRight = document.querySelector(".kad-menu-bar-three");

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("animated-kad-nav");
  barHide.classList.toggle("animated-bar-hide");
  barLeft.classList.toggle("animated-bar-cross-left");
  barRight.classList.toggle("animated-bar-cross-right");
}