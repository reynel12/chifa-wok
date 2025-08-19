// Tabs
function openTab(tabName, event) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  // Script para el toggle del menú
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav.icons");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

  
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}

// Menú hamburguesa
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav.icons');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
