const backdrop = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.btn-order');
const modalBtnClose = document.querySelector('.modal__close-btn');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
