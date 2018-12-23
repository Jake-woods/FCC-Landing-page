const btnOpenNav = document.querySelector('#open-nav');
const btnCloseNav = document.querySelector('.close-nav');
const nav = document.querySelector('#main-nav');

btnOpenNav.addEventListener('click', openNav);
btnCloseNav.addEventListener('click', closeNav);

function openNav() {
   nav.classList.add('main-nav_open');
}

function closeNav() {
   nav.classList.remove('main-nav_open');
}