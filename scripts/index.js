
//Переключение меню
const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

const linkFilterToggle = document.querySelectorAll('.catalog__link-filter');
const linkCurrent = document.querySelector('.catalog__link-filter--current');
const card = document.querySelector('.card');
const france = document.querySelector('.card--france');
const germany = document.querySelector('.card--germany');
const england = document.querySelector('.card--england');


// linkFilterToggle.addEventListener('click', () => {
//   // if (card.classList.contains('germany')) {
//   //   card.classList.remove('germany')
//   // } else {
//   //   card.classList.add('france')
//   // }
//   console.log('hi')
// })
for (let i = 0; i < linkFilterToggle.length; i++) {
  i.onclick = function () {
    console.log('hi')
  }

}
