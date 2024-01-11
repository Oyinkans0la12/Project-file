//alert("warning");
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// console.log(menuIcon);

menuIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuList.classList.toggle("toggle-menu");
}
