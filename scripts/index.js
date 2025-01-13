
//Переключение меню
const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const body = document.querySelector('body');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    body.classList.add('page__body-no-scroll');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    body.classList.remove('page__body-no-scroll');
  }
});


