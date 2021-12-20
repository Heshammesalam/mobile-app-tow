function owlInitialize() {
    if ($(window).width() < 767) {
        $('.metal-content').owlCarousel({
            loop:true,
            nav: false,
            dots:true,
            autoplay:true,
            margin:20,
            autoplayTimeout:50000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                }
            }

        })
    }else{
        $('#v-pills-tabContent').owlCarousel('destroy');
    }
}
$(document).ready(function () {

    // Header slider
    $('.header-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots:true,
        responsiveClass:true,
        autoplay:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout:3500,
        autoplayHoverPause:false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
                nav:true,
            }
        },
    });

    //tabs
    $('.tab').on('click', function(evt) {
        evt.preventDefault();
        $('.tab').removeClass('active')
        $(this).addClass('active');
        var sel = this.getAttribute('data-toggle-target');

        $('.tab-content').removeClass('active');
        $('.'+sel).addClass('active');
    });

    /* Toggle menu button*/
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active','fast');
        $('.navbar-collapse').toggleClass('toggle');
        $('.collapse.toggle .nav-link').removeClass('fadeIn, fadeInRight');
        $('body').toggleClass('toggleBody');
    })

    //
    owlInitialize()
    $( window ).on('scroll', function() {
        owlInitialize()
    });

    //Engineering Services slider
    $('.card-content.tab-content').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots:false,
        responsiveClass:true,
        autoplay:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout:4000000,
        autoplayHoverPause:false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items: 2
            },
            767:{
                items: 3
            },
            991:{
                items: 4
            }
        },
    });

})

