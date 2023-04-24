/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
    "use strict";
    /*-----------------------------------------------------
        Function  Start
    -----------------------------------------------------*/
    var Storify = {
        initialised: false,
        version: 1.0,
        init: function () {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
                Function Calling
            -----------------------------------------------------*/
            this.preLoader();
            this.popupVideo();
            this.topButton();
            this.countDown();
        },

        /*-----------------------------------------------------
            Function Declaration
        -----------------------------------------------------*/
        preLoader: function () {
            jQuery(window).on('load', function () {
                jQuery(".storfy-preloader-content").fadeOut();
                jQuery(".storfy-preloader").delay(350).fadeOut("slow");
            });
        },

        /*-----------------------------------------------------
            Fix Tour Video Popup
        -----------------------------------------------------*/
        popupVideo: function () {
            $('.popup-youtube').magnificPopup({
                type: 'iframe'
            });
        },

        /*------ Fix GoToTopButton ---------------*/
        topButton: function () {
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
        },

        /* Count Down */
        countDown: function () {


        },


    };

    Storify.init();

})(jQuery);









