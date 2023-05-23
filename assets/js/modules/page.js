
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
		
	$("#btn_validatebuy").on("click", function(){
        var cpf = $("#inputbuy").val();

        if(validarCPF(cpf)){

			if (validarSocio(cpf)) {
				var myModal = new bootstrap.Modal($("#modalValidate")[0]);
				myModal.show();
			} else {
				$('#inputbuy').addClass('error');
				$('.error-msg').text("Esse CPF não é um Sócio Torcedor!");
				var myModal = new bootstrap.Modal($("#modalValidate")[0]);
				myModal.show();
			}
        } else{
            $('#inputbuy').addClass('error');
			$('.error-msg').text("CPF Inválido!")
        }

    });

	

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


})(jQuery);

