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
    $(document).on('click', '.jv_up', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

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
// dynamic banner padding top
// $(document).ready(function(){
//     var defaultheight = 45;
//     var headerheight = $('.jv_header_wrapper ').innerHeight();
//     $('.jv_banner_wrapper').css('padding-top', ($('.jv_header_wrapper ').innerHeight()+45));
// });

// function createbonuspage(){
//     var bonus_fname = $.trim($('#bonus_fname').val());
//     var bonus_link = $.trim($('#bonus_link').val());
//     if( bonus_fname !== '' && bonus_link !== '' )
//     {
//         $('#bonus_error').text('');
//         $.post("https://storify.com/bonus-page/generate.php",
//         {
//             bonus_fname: bonus_fname,
//             bonus_link: bonus_link
//         },
//         function(data, status){
//             console.log(data);
//             var response = data.split('|');
//             if( response[0] == 0 ){
//                 $('#bonus_error').css('color','red');
//                 $('#bonus_error').text(response[1]);
//             }
//             else{
//                 $('#bonus_error').css('color','green');
//                 $('#view_bonus_page').attr('href','https://storify.com/bonus-page/j.php?Storify=lsh'+response[1]);
//                 $('#view_bonus_page').removeClass('d-none');
//                 $('#download_bonus_page').attr('href','https://storify.com/members/home/bonuspagedownload/'+response[1]);
//                 $('#download_bonus_page').removeClass('d-none');
//             }
//         });
//     }
//     else{
//         $('#bonus_error').text('Please, fill both the details.');
//         $('#bonus_error').css('color','red');
//     }
// }
