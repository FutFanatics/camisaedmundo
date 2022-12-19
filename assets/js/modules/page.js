
(function($){

	// new Progressive({
	// 	el: '.copa-do-mundo',
	// 	lazyClass: 'lazy',
	// }).fire();
	var containerTech = $('.describe__slick')	
	var containerShirt = $('.slick__shirt')	
	var containerFooter = $('.slick__footer')	
	var containerWarm = $('.warm__slick')
	var containerBanner = $('.slick__banner')

    containerTech.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
    });
	containerShirt.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
    });
	containerFooter.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
    });
})(jQuery);

