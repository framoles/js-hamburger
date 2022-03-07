const menu = document.querySelector(`.hamburger-menu`);
const btnOpen = document.querySelector(`.fa-bars`);
const btnClose = document.querySelector('.fa-times');


btnOpen.addEventListener('click', function () {
    menu.classList.add('active');
});
btnClose.addEventListener('click', function () {
    menu.classList.remove('active');
});