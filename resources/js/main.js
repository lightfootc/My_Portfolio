$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()){
            $('header').addClass('navBackground');
        }
        else {
            $('header').removeClass('navBackground');
        }
    });
    
    $('.mobile-nav svg').click(function(){
        $('.navbar ul').toggleClass('active');
    });
});