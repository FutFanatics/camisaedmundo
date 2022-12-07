
(function($){

	// new Progressive({
	// 	el: '.copa-do-mundo',
	// 	lazyClass: 'lazy',
	// }).fire();
	var containerTech = $('.tech__slick')	
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
        slidesToShow: 1,
        slidesToScroll: 1,
    });
	
	containerWarm.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 5,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				adaptiveHeight: false,
                vertical: false,
                verticalSwiping: false,
                
			}
		}]
	});
	containerBanner.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
	var index = 0;

	$('.c-tech_advice .card-tech').on('mouseenter',function(){
		setInterval(function(){
			if (index == 4) {
				return;
			}
			console.log($('.c-tech_advice .card-tech')[index])
			$($('.c-tech_advice .card-tech')[index]).addClass('active')
			index++
		},400)
	});
	
	document.querySelector('.c-home-video').play();

    $('.c-home-replay').on('click', function(){
    	document.querySelector('.c-home-video').play();
		document.querySelector('.c-home-video__desk').play();
	});

	$('.c-home-mute').on('click', function(){
    	var muted = document.querySelector('.c-home-video').muted;
		if (muted) {
			document.querySelector('.c-home-video').muted = false;
			$(this).css('background-image', "url('https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/brasileirao/topo/icon_sound.svg')" );
			$(this).css('background-position', "left center" );
			$(this).css('background-size', "21px 21px" );
		} else {
			document.querySelector('.c-home-video').muted = true;
			$(this).css('background-image', "url('https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/brasileirao/topo/icon_no-sound.svg')" )
            $(this).css('background-position', "center" );
			$(this).css('background-size', "25px 25px" );
        }
	});

	$('.c-home-button').on('click', function(){
    	$('#videoLP').attr('src', $('#videoLP').attr('src') + '?autoplay=1');
	});

    $('.c-home-video').on('ended', function (e) {
        $('.c-home-button').removeClass('d-none');
    });


	$('body').on('click', '.seemore-button', function(){
            
		$(this).parents('.seemore-container').toggleClass('seemore-close');
		multiSlideAdaptiveHeight($('.container-slick'))

		if ($(this).parents('.seemore-container').hasClass('seemore-close')) {
			$(this).html('Ver mais +');
		} else {
			$(this).html('Ver menos -');
		}
		return false;
	});

	var now = new Date(2022,11,11).getTime();
	var live1 = new Date(2022,11,04).getTime();
	var live2 = new Date(2022,11,11).getTime();
	var live3 = new Date(2022,11,18).getTime();
	var live4 = new Date(2022,11,25).getTime();

	if(now>live3){
		$('.live__4').addClass('show');
		$('.live__4').addClass('order-first');
		$('.live__3').removeClass('show');
		$('.options-shared__live1').css('display', 'none');
		$('.options-shared__live4').css('display', 'block');
		$("meta[name='img']").attr("content", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/live_shop/banners/d.banner__live-4.png");
	}else if(now<=live3 && now>live2){
		console.log('live3');
		$('.live__3').addClass('show');
		$('.live__3').addClass('order-first');
		$('.live__2').removeClass('show');
		$('.options-shared__live1').css('display', 'none');
		$('.options-shared__live3').css('display', 'block');
		$("meta[name='img']").attr("content", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/live_shop/banners/d.banner__live-3.png");

	}else if(now<=live2 && now>live1){
		console.log('live2')
		$('.live__2').addClass('show');
		$('.live__2').addClass('order-first');
		$('.live__1').removeClass('show');
		$('.options-shared__live1').css('display', 'none');
		$('.options-shared__live2').css('display', 'block');
		$("meta[name='img']").attr("content", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/live_shop/banners/d.banner__live-2.png");
		$("meta[name='twitter:image]").attr("content", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/live_shop/banners/d.banner__live-2.png");
	}else{
	console.log('live1')
	$('.live__1').addClass('show');
	}

	function multiSlideAdaptiveHeight(slider) {

        var activeSlides = [];
        var tallestSlide = 0;
        
        setTimeout(function() {
        
            $('.slick-track .slick-active', slider).each(function(item) {
                activeSlides[item] = $(this).outerHeight();
            });
        
            activeSlides.forEach(function(item) {
            if (item > tallestSlide) {
				tallestSlide = item;
			}
			});
        
			$('.slick-list', slider).height(tallestSlide);
        }, 10);
    }

	$('[data-countdown-day]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-day');
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%D')); 
		});
	  });
	  $('[data-countdown-hour]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-hour');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%H')); 
		});
	  });
	  $('[data-countdown-minute]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-minute');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%M')); 
		});
	  });
	  $('[data-countdown-seconds]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-seconds');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%S')); 
		});
	  });
	  $('.c-forms form').on('submit', function(event) {
		event.preventDefault();

		var form = $(this);
		var formData = form.serialize();
		var url = 'https://microservicos.futfanatics.com.br/api/v1/futfanatics-nacional/dinamizeAjax?url=' + encodeURIComponent(form.attr('action'));

		form.find('.msg-resp').html('').removeClass('text-success text-danger text-info').slideUp();

		if (!form.find('select').val()) {
			form.find('.msg-resp').html('Escolha o seu time.').addClass('text-info').slideDown();
			return false;
		}
		
		$.post(url, formData, function(response) {
			if (response.status) {
				form.find('.msg-resp').html('Boa jogada, e-mail cadastrado com sucesso!').addClass('text-success').slideDown();
				form.find('.form-control').addClass('sucess');
				addTriggerTGM("submitNewsletter", []);
				console.log('deu bom')

			} else {
				form.find('.msg-resp').html('Desculpe-nos, ocorreu um erro ao cadastrar.').addClass('text-danger').slideDown();
				form.find('.form-control').addClass('error')
				console.log('Error form dinamize: ' + response.error_msg.result);
			}
		});

		return false;
	});
	$("html").on("click", ".newsletter_form button", function(evt) {
    	var btn = $(evt.currentTarget);
    	var x = evt.pageX - btn.offset().left;
      	var y = evt.pageY - btn.offset().top;

      	$("<span/>").addClass("ripple-effect").appendTo(btn).css({
        	left: x,
        	top: y
      	});
    });
})(jQuery);

