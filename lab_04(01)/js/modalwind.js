const modalwind=document.querySelector('.backdrop');
const modalBtnOpen=document.querySelector('.modal-btn-open');
const modalBtnClose=document.querySelector('.modal-btn-close');

const toggleModal=() => modalwind.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click',toggleModal);
modalBtnClose.addEventListener('click',toggleModal);
