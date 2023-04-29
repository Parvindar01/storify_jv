/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var storify = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if (!this.initialised) {
				this.initialised = true;
			}
			else {
				return;
			}
			/*-------------- Design Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/

			this.loader();
			this.bottom_top();
			this.sticky_header();

		},

		/*-------------- Design Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/

		// loader			
		loader: function () {
			jQuery(window).on('load', function () {
				$(".loader").fadeOut();
				$(".spinner").delay(500).fadeOut("slow");
			});
		},
		// loader

		// Bottom To Top
		bottom_top: function () {
			if ($('#button').length > 0) {

				var btn = $('#button');

				$(window).scroll(function () {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});

				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, '300');
				});


			}
		},

		// Sticky header
		sticky_header: function () {
			if ($('.st_stickybar_wrapper').length > 0) {

				// stickybar start
				$('.st_stickybar_toggle').click(function () {
					$('.st_stickybar_wrapper').toggleClass('stickybar_close');
					$('body').toggleClass('bar_close');
				});
				var barh = $('.st_stickybar_wrapper').innerHeight();
				$('body').css('padding-top', barh);
				// stickybar end

				$(window).on('resize', function () {
					var barh = $('.st_stickybar_wrapper').innerHeight();
					$('body').css('padding-top', barh);
				});
			}

		},
		// Sticky Header



	};
	storify.init();

}(jQuery));





