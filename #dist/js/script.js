$(function() {
    $('.main-slider__wrapper').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        autoWidth:true,
        nav:false,
        dots:false,
        autoplay:true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
    });
    
});