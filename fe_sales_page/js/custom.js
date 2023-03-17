/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var VidMagnet = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- Design Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
		    
			this.loader();
			this.bottom_top();
			
		},
		
		/*-------------- Design Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
		
		// loader			
			loader: function () {
				jQuery(window).on('load', function() {
					$(".loader").fadeOut();
					$(".spinner").delay(500).fadeOut("slow");
				});
			},
		// loader
		
		// Bottom To Top
			bottom_top: function(){  
				if($('#button').length > 0){
					
					var btn = $('#button');

					$(window).scroll(function() {
					  if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					  } else {
						btn.removeClass('show');
					  }
					});

					btn.on('click', function(e) {
					  e.preventDefault();
					  $('html, body').animate({scrollTop:0}, '300');
					});


				}
			},
		// Bottom To Top
		
		
	
	};
	VidMagnet.init();	

}(jQuery));	

$(document).ready(function() {
    $('.ce-countdown').countEverest({
        // Set your target date here!
        day: 21,
        month: 09, 
		year: 2021,
		hour: 10,
		minute: 00,
		timeZone: -4, 
		pluralLabels: true,
		singularLabels: true
    }); 
});

