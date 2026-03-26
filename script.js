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

window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-content h1');
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        title.style.transition = 'all 1.5s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 500);
});

// Seleciona os elementos
const menuBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.getElementById('side-menu');

// Função para abrir o menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.width = "100%"; // Ocupa a tela toda estilo Gucci
});

// Função para fechar o menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.width = "0";
});