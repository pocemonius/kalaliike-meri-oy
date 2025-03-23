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

    $('.header__menu .burger__link').on('click', function(){
        $('.menu').css('display', 'flex');
        $('body').addClass('no_scroll');
    });

    $('.menu__close').on('click', function(){
        $('.menu').css('display', 'none');
        $('body').removeClass('no_scroll');
    });

    $('.menu__link').on('click', function(){
        $('.menu').css('display', 'none');
        $('body').removeClass('no_scroll');
    });

    $("body").on('click', '[href*="#"]', function(e){
        $.scrollTo($(this.hash), 500);
    });

    

    
    
});