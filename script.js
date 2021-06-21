const btnBurger = document.querySelector('.burger');
const hero = document.querySelector('.hero');
const menu = document.querySelector('.menu');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    hero.classList.toggle('hero-display');
    menu.classList.toggle('menu-active');
})