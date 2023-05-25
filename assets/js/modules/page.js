
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
				dots:true,
			}
		}]
    });
	containerShirt.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: true,
		prevArrow: $('.nav-slick__shirt').find('.slick-prev'),
        nextArrow: $('.nav-slick__shirt').find('.slick-next'),
        dots: true,
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
		
	$("#btn_validatebuy").on("click", function(){
        var cpf = $("#inputbuy").val();

        if(validarCPF(cpf)){

			if (validarSocio(cpf)) {
				var myModal = new bootstrap.Modal($("#modalValidate")[0]);
				myModal.show();

				$('.inputForm2.cpf').val(cpf)
			} else {
				$('#inputbuy').addClass('error');
				$('.error-msg').text("Esse CPF não é um Sócio Torcedor!");
				var myModal = new bootstrap.Modal($("#modalValidate")[0]);
				myModal.show();

				$('.inputForm2.cpf').val(cpf)
			}
        } else{
            $('#inputbuy').addClass('error');
			$('.error-msg').text("CPF Inválido!")
        }

    });

	$(".box-sizes button").on('click', function(){
		$this = $(this);
		
		$(".box-sizes button").removeClass('selected');
		$this.addClass('selected');
	});

	// Contador
	$('.counter button').on('click',function(){

		var classe = $(this).attr('class');
		var $input = $('.counter input')
		var qntd = parseInt($input.val());

		if (qntd > 0) {
			if (classe == 'more') {
				$input.val(qntd + 1);
			}
		}

		if (qntd > 1) {
			if (classe == 'less') {
				$input.val(qntd - 1);
			}
		}
	});

	$("#formValidate").validate();

	$('.data_nascimento').mask('00/00/0000');
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.phone_with_ddd').mask('(00) 00000-0000');

	function validarCPF(cpf) {
		cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

		if (cpf.length !== 11) {
			return false;
		}
		
		// Verifica se todos os dígitos são iguais
		if (/^(\d)\1+$/.test(cpf)) {
			return false;
		}
		
			// Validação dos dígitos verificadores
			var soma = 0;
			var resto;
		
		for (var i = 1; i <= 9; i++) {
		  soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
		}
		
			resto = (soma * 10) % 11;
		
		if ((resto === 10) || (resto === 11)) {
			resto = 0;
		}
	
		if (resto !== parseInt(cpf.substring(9, 10))) {
			return false;
		}
		
		soma = 0;
		
		for (var i = 1; i <= 10; i++) {
			soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
		}
		
		resto = (soma * 10) % 11;
		
		if ((resto === 10) || (resto === 11)) {
			resto = 0;
		}
		
		if (resto !== parseInt(cpf.substring(10, 11))) {
			return false;
		}
		
		return true;
	}

	function validarSocio(cpf) {
		jQuery.get("https://apiinfrahomologacao.futfanatics.app/partner/check/" + cpf + "?time=vasco", function( response ) {
			var response = jQuery.parseJSON(response)
			if(response.data.has_partner){
				return true;
			} else {
				return false;
			}
		});
	}
	$('.see-more').on('click', function() {

		if (!$(this).siblings('.informative-box').hasClass('active')) {
			$(this).html('Mostrar menos -');
			$(this).siblings('.informative-box').addClass('active');
		} else { 
			$(this).html('Mostrar mais +');
			$(this).siblings('.informative-box').removeClass('active');
		}
		return false;
	});
	$('.see-more-shield').on('click', function() {

		if (!$(this).siblings('.box-content-shield').hasClass('active')) {
			$(this).html('Mostrar menos -');
			$(this).siblings('.box-content-shield').addClass('active');
		} else { 
			$(this).html('Mostrar mais +');
			$(this).siblings('.box-content-shield').removeClass('active');
		}
		return false;
	});

})(jQuery);

