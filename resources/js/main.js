$(document).ready(function(){
    // This adds the background color to the navbar on scroll
    $(window).scroll(function(){
        if ($(window).scrollTop()){
            $('header').addClass('navBackground');
        }
        else {
            $('header').removeClass('navBackground');
        }
    });
    //This toggles the hamburger icon for the mobile nav
    $('.mobile-nav').click(function(){
        $('.navbar ul').toggleClass('active');
    });
    // This adds a blur effect to images on scroll
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $('.image-blur').css({
            filter: 'blur(' + (scroll/80) + 'px)'
        })
    })
});