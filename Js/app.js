// Menu Burger


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const mainContent = document.querySelector('main');
    const body = document.body;

    // Ouvrir/Fermer 
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('nav-open');
        
        if (isOpen) {
            navMenu.classList.remove('nav-open');
        } else {
            navMenu.classList.add('nav-open');
        }
    });

    // Fermer la navbar en cliquant en dehors
    body.addEventListener('click', (dehors) => {
        if (!navMenu.contains(dehors.target) && !menuToggle.contains(dehors.target)) {
            navMenu.classList.remove('nav-open');
            mainContent.classList.remove('main-shift');
        }
    });
});
