const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');

// Abrir Menu
openMenu.addEventListener('click', () => {
    sideMenu.style.width = "100%";
});

// Fechar Menu
closeMenu.addEventListener('click', () => {
    sideMenu.style.width = "0%";
});