/**
 * Created by DSHAH on 7/26/2017.
 */

/*for the sticky navigation*/
$(document).ready(function() {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '95px;'
    });

    /*Scroll on button*/
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /*Navigation scroll*/
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*Animations on scroll*/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /*-----Mobile Navigation--------------*/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon=$('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else
        {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /*---Maps-----*/
   var map= new GMaps({
        div: '.map',
        lat: 31.4323577,
        lng: -100.5071215,
        zoom:12
    });

    map.addMarker({
        lat: 31.4323577,
        lng: -100.5871215,
        title: 'San Angelo',
        infoWindow: {
            content: '<p>Destined</p>'
        }
    });
});