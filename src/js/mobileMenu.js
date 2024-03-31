const mobileMenu = document.querySelector('.mobileMenu');
const mobileBtnOpen = document.querySelector('.header-nav__burger-menu');
const mobileBtnClose = document.querySelector('.mobileMenu__close');
const mobileMenu__link = document.querySelectorAll('.mobileMenu__link');

const toggleMobileMenu = () => mobileMenu.classList.toggle('is-hiddenMenu');

const closeMobileMenu = () => mobileMenu.classList.add('is-hiddenMenu');

mobileBtnOpen.addEventListener('click', toggleMobileMenu);
mobileBtnClose.addEventListener('click', toggleMobileMenu);
mobileMenu__link.addEventListener('touchstart', closeMobileMenu);
