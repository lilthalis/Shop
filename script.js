const menuBtn = document.querySelector('.menu-icon'); // Seleciona seu ícone
const navMenu = document.querySelector('.nav-links'); // Seleciona sua lista de links

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Liga e desliga o menu
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Garante que o texto fique visível assim que a página carregar
window.onload = () => {
    const heroText = document.querySelector('.hero-content');
    heroText.style.opacity = '1';
    heroText.style.transition = 'opacity 2s ease-in-out';
};