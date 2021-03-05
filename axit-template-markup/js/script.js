const navToggleHamburger = document.querySelector('.nav__toggle-hamburger');
const navToggle = document.querySelector('.nav__menu-toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', function () {
    navToggleHamburger.classList.toggle('nav__toggle-hamburger--cross');
    navList.classList.toggle('nav__list--show');
});
