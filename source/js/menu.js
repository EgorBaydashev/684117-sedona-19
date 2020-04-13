var pageHeader = document.querySelector('.page-header');
var pageToggle = document.querySelector('.page-header__toggle');
var navToggle = document.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--nojs');

pageToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--menu-closed')) {
    pageHeader.classList.remove('page-header--menu-closed');
    pageHeader.classList.add('page-header--menu-opened');
  } else {
    pageHeader.classList.add('page-header--menu-closed');
    pageHeader.classList.remove('page-header--menu-opened');
  }
});

navToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--menu-opened')) {
    pageHeader.classList.remove('page-header--menu-opened');
    pageHeader.classList.add('page-header--menu-closed');
  } else {
    pageHeader.classList.add('page-header--menu-opened');
    pageHeader.classList.remove('page-header--menu-closed');
  }
});
