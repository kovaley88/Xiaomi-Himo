$(function () {

    $('.bike-slider, .slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,

    });

});

// меню бургер
let menuBtn = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu-burger_div');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})