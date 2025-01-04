// Menu Burger

document.addEventListener('DOMContentLoaded', () => {
    const menuToggleDark = document.getElementById('menuToggleDark');
    const menuToggleLight = document.getElementById('menuToggleLight');
    const navMenu = document.querySelector('.nav-menu');
    const mainContent = document.querySelector('main');
    const body = document.body;

    const toggleMenu = (menuToggle) => {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('nav-open');
            
            if (isOpen) {
                navMenu.classList.remove('nav-open');
            } else {
                navMenu.classList.add('nav-open');
            }
        });
    };

    toggleMenu(menuToggleDark);
    toggleMenu(menuToggleLight);

    // Fermer la navbar en cliquant en dehors
    body.addEventListener('click', (dehors) => {
        if (!navMenu.contains(dehors.target) && !menuToggleDark.contains(dehors.target) && !menuToggleLight.contains(dehors.target)) {
            navMenu.classList.remove('nav-open');
            mainContent.classList.remove('main-shift');
        }
    });
});

//permet de changer de stylesheet
const changeStylesheet = () => {
    const stylesheet = document.getElementById('stylesheet');
    const favicon = document.getElementById('favicon');

    if (stylesheet.getAttribute('href') === '/Styles/styles.css') {
        stylesheet.setAttribute('href', '/Styles/alternate-styles.css');
        favicon.setAttribute('href', 'Img/light-logo.ico');
        localStorage.setItem('stylesheet', '/Styles/alternate-styles.css');
        localStorage.setItem('favicon', 'Img/light-logo.ico');
    } else {
        stylesheet.setAttribute('href', '/Styles/styles.css');
        favicon.setAttribute('href', 'Img/dark-logo.ico');
        localStorage.setItem('stylesheet', '/Styles/styles.css');
        localStorage.setItem('favicon', 'Img/dark-logo.ico');
    }
};

const loadSavedStylesheet = () => {
    const savedStylesheet = localStorage.getItem('stylesheet');
    const savedFavicon = localStorage.getItem('favicon');
    if (savedStylesheet) {
        document.getElementById('stylesheet').setAttribute('href', savedStylesheet);
    }
    if (savedFavicon) {
        document.getElementById('favicon').setAttribute('href', savedFavicon);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const changeStylesheetButton = document.getElementById('changeStylesheet');
    changeStylesheetButton.addEventListener('click', changeStylesheet);
    loadSavedStylesheet();
});



//Défilement smooth vers le haut
const scr = document.getElementById('body-button');

scr.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})