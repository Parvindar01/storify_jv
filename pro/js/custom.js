// javascript

$(document).ready(function () {


    // ontopscroll
    $(document).on('click', '.jv_up', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })



});
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".jv_header_wrapper").addClass("fixedHeader");
//     }else{
//         $(".jv_header_wrapper").removeClass("fixedHeader");
//     }
// }); 

/*------ Fix GoToTopButton ---------------*/
$(document).ready(function () {
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