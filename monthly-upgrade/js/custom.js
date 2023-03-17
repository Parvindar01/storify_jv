/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    /*-----------------------------------------------------
    	Function  Start
    -----------------------------------------------------*/
    var Storify = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
            	Function Calling
            -----------------------------------------------------*/
            this.loader();            
            this.topButton();
            this.countDown();
        },

        /*-----------------------------------------------------
            Function Declaration
        -----------------------------------------------------*/
        // loader			
			loader: function () {
				jQuery(window).on('load', function() {
					$(".loader").fadeOut();
					$(".spinner").delay(500).fadeOut("slow");
				});
			},
		// loader

        /*-----------------------------------------------------
        	Fix Tour Video Popup
        -----------------------------------------------------*/
        // popupVideo: function() {
        //     $('.popup-youtube').magnificPopup({
        //         type: 'iframe'
        //     });
        // },

        /*------ Fix GoToTopButton ---------------*/
        topButton: function() {
            var scrollTop = $("#scroll");
            $(window).on('scroll', function() {
                if ($(this).scrollTop() < 500) {
                    scrollTop.removeClass("active");
                } else {
                    scrollTop.addClass("active");
                }
            });
            $('#scroll').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
            $(function() {
                $('.go-to-demo').click(function() {
                    $('html, body').animate({ scrollTop: $('#go-to-demo').offset().top }, 'slow');
                    return false;
                });
            });
        },
        // counter
        countDown: function() {
        },
    };
    Storify.init();
})(jQuery);


// jQuery(document).ready(function() {
//     jQuery('.ce-countdown').countEverest({year:1970,month:07,day:24,hour:12,minute:00});
// });
