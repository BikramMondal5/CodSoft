(function($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function() {
        $('#preloader').fadeOut('1000', function() {
            $(this).remove();
        });
    });

    // :: Sticky Active Code
    $window.on('scroll', function() {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });


    // :: Carousel Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome_slides');

        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
            dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        })
        welcomeSlider.on('translate.owl.carousel', function() {
            var layer = $("[data-animation]");
            layer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function() {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function() {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function() {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // :: Countdown Active Code
    if ($.fn.syotimer) {
        $('#syotimer').syotimer({
            year: 2025,
            month: 9,
            day: 10,
            hour: 0,
            minute: 0
        });
    }

    // :: Counter Up Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }

    // :: One Page Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // Glassmorphism Navbar Functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.glass-navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.padding = '10px 20px';
                    navbar.style.background = 'rgba(25, 118, 210, 0.25)'; // More vibrant blue
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.boxShadow = '0 5px 15px rgba(25, 118, 210, 0.2)';
                } else {
                    navbar.style.padding = '15px 30px';
                    navbar.style.background = 'rgba(25, 118, 210, 0.15)'; // Lighter vibrant blue
                    navbar.style.backdropFilter = 'blur(5px)';
                    navbar.style.boxShadow = '0 2px 10px rgba(25, 118, 210, 0.1)';
                }
            }
        });

        // Make search bar interactive
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.style.boxShadow = '0 0 8px rgba(25, 118, 210, 0.6)';
            });
            
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.style.boxShadow = 'none';
            });
        }
        
        // Initialize the profile dropdown functionality
        const profileBadge = document.getElementById('profileBadge');
        const profileDropdown = document.getElementById('profileDropdown');
        
        if (profileBadge && profileDropdown) {
            profileBadge.addEventListener('click', () => {
                profileDropdown.classList.toggle('active');
            });
            
            document.addEventListener('click', (e) => {
                if (!profileBadge.contains(e.target) && !profileDropdown.contains(e.target)) {
                    profileDropdown.classList.remove('active');
                }
            });
        }
    });

})(jQuery);