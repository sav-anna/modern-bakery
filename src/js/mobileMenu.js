const mobileMenu = document.querySelector('.mobileMenu');
const mobileBtnOpen = document.querySelector('.header-nav__burger-menu');
const mobileBtnClose = document.querySelector('.mobileMenu__close');

const toggleMobileMenu = () => mobileMenu.classList.toggle('is-hiddenMenu');

mobileBtnOpen.addEventListener('click', toggleMobileMenu);
mobileBtnClose.addEventListener('click', toggleMobileMenu);
