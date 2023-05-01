// javascript

$(document).ready(function () {
    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        delay: 400,
        opacity: null
    };
    ScrollReveal().reveal('.sp_greenBox_holder ', slideUp);

    // menu clicks
    $(document).on('click', '.jv_menu>li>a', function () {
        var target = $(this).attr('data-target');
        $('.jv_menu>li').removeClass('active');
        $(this).parent().addClass('active');
        var target = $(this).attr('data-target');
        $('html, body').animate({ scrollTop: $($(this).closest('.sp_mainWrapper').find('[data-section="' + target + '"]')).offset().top }, 2000);
    })
    // sticky header on scroll 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.sp_headerMain_wrapper').addClass('fixed');
        } else {
            $('.sp_headerMain_wrapper').removeClass('fixed');
        }
    });
    // ontopscroll
    // $(document).on('click', '.jv_up', function () {
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //     return false;
    // })

    // responsive menu
    $(document).on('click', '.jv_toggle', function () {
        $(this).parent().toggleClass('menu_open');
        $('body').toggleClass('toggleMenu');
    });

    $(document).on('click', '.toggleOverlay', function () {
        $('body').removeClass('toggleMenu');
        $('.jv_menu_wrapper ').toggleClass('menu_open');
    })




});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".jv_header_wrapper").addClass("fixedHeader");
    } else {
        $(".jv_header_wrapper").removeClass("fixedHeader");
    }
});

$(document).ready(function () {
    // go to top
    var scrollTop = $("#scroll");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            scrollTop.removeClass("active");
        } else {
            scrollTop.addClass("active");
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(function () {
        $('.go-to-demo').click(function () {
            $('html, body').animate({ scrollTop: $('#go-to-demo').offset().top }, 'slow');
            return false;
        });
    });
});