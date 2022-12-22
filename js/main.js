const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
const navLink = document.querySelector('.nav__menu-list');
// Slider
const slider = [...document.querySelectorAll('.carousel__services-card')]; // Array
let value = 0;
let interval;

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

function changePosition() {
    if (value < slider.length) {
        slider[value].classList.toggle('carousel__services-card--show');
        value++;
    }

    if (value == slider.length) {
        value = 0;
    }

    slider[value].classList.toggle('carousel__services-card--show');

}

let media = window.matchMedia("(min-width: 1024px)");
interval = setInterval(changePosition, 6000);

if (media.matches) {

    clearInterval(interval);
}




