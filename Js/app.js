// Menu Burger


document.addEventListener('DOMContentLoaded', () => {
    const menuBurger = document.getElementById('menuBurger');
    const navMenu = document.querySelector('.nav-menu');
    const mainContent = document.querySelector('main');
    const body = document.body;

    // Ouvrir/Fermer 
    menuBurger.addEventListener('click', () => {
        const Open = navMenu.classList.contains('nav-open');
        
        if (!Open) {
            navMenu.classList.add('nav-open');
        } else {
            navMenu.classList.remove('nav-open');
        }
    });

    // Fermer la navbar en cliquant en dehors
    body.addEventListener('click', (sortir) => {
        if (!navMenu.contains(sortir.target) && !menuBurger.contains(sortir.target)) {
            navMenu.classList.remove('nav-open');
            mainContent.classList.remove('main-shift');
        }
    });
});
