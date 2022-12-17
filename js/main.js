const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
const navLink = document.querySelector('.nav__menu-list');

hamburguerIcon.addEventListener('click', () => {
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
});

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.nav');

    nav.classList.toggle("nav--scrolled", window.scrollY > 0);
});

navLink.addEventListener('click', () => {
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
});