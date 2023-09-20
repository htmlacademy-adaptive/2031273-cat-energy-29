let headerOpened = document.querySelector('.main-header');
let navMain = document.querySelector('.main-header__menu');
let navToggle = document.querySelector('.menu__toggle');
let map = document.querySelector('.cooperation__map');

document.addEventListener('DOMContentLoaded', function() {
  if (map.style.display === 'none') {
    map.style.display = 'block';
  } else {
    map.style.display = 'block'
  }
});

headerOpened.classList.remove('main-header--opened');
navMain.classList.remove('main-header__menu--opened');
navMain.classList.remove('main-header__menu--nojs');
navMain.classList.add('main-header__menu--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__menu--closed')) {
    navMain.classList.remove('main-header__menu--closed');
    navMain.classList.add('main-header__menu--opened');
  } else {
    navMain.classList.add('main-header__menu--closed');
    navMain.classList.remove('main-header__menu--opened');
  }
});
