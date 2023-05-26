function navStyle(scroll) {
    var original_src = $('header .logo img')[0].src;
    if (scroll >= 20) {
        $('section.navigation').addClass('fixed');
        $('header li a').css({
            "color": "#fff",
        });
        $('.member-actions a').css({
            "background-color": "#fff0",
        });
        if (original_src.includes("dark")) {
            $('header .logo img')[0].src = "img/logo-light.png";
        }
        if (window.innerWidth < 991) {
            $('.header-nav.open').css({
                "background-color": "rgba(55,36,40,.88)",
            });
        }
    } else {
        $('section.navigation').removeClass('fixed');
        $('header li a').css({
            "color": "#5f4a24",
        });
        $('.member-actions a').css({
            "background-color": "#ffffff8c",
        });
        if (original_src.includes("light")) {
            $('header .logo img')[0].src = "img/logo-dark.png";
        }
        if (window.innerWidth < 991) {
            $('.header-nav.open').css({
                "background-color": "#fffc",
            });
        }
    }
}

$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        var scroll = $(window).scrollTop();
        navStyle(scroll);
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');
    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            navStyle(scroll);
        });
    });
    $(function () {
        new Splide( '#image-carousel', {
            type: "loop",
            autoplay: true,
            lazyLoad: 'sequential',
            perPage    : 3,
            breakpoints: {
                860: {
                    perPage: 1,
                },
            },
        } ).mount();
    });
});
