const navbar = document.querySelector('.navbar');
const btnMenu = document.querySelector('.menu');
const mobileNavbar = document.querySelector('.navbar_mobile');

btnMenu.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
})