
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

				$('#formValidate .cpf').val(cpf)
			} else {
				$('#inputbuy').addClass('error');
				$('.error-msg').text("Esse CPF não é um Sócio Torcedor!");
				var myModal = new bootstrap.Modal($("#modalValidate")[0]);
				myModal.show();

				$('#formValidate .cpf').val(cpf)
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

	$(".box-buy .buy").on('click', function(){

		$('.box-msg').text("")
		$('.box-msg').removeClass("error")

		if(!validarVariant()) {
			
			$('.box-msg').text("Escolha um tamanho para prosseguir com a compra!")
			$('.box-msg').addClass("error")
			return false;
		}
		var myModal = new bootstrap.Modal($("#modalBuy")[0]);
		myModal.show();
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

	
	/** Validação do 2º Formulário */
	//$("#formValidate").validate();

	const $fullname = $('#fullname');
	const $phone = $('#phone');
	const $birthdate = $('#birthdate');
	const $email = $('#email');
	const $cpf = $('.cpf');
	const $password = $('#password');
	const $password_confirm = $('#password_confirm');
	
	const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	$cpf.mask('000.000.000-00', {reverse: true});
	$birthdate.mask('00/00/0000');
	$phone.mask('(00) 00000-0000');

	$fullname.on('change', function (e) {
		const value = e.target.value;

		if(value.length <= 3 ) {
			 displayError($(this), "Nome deve conter 3 caracteres");
		} else {
			displaySuccess($(this), "");
		}
	});

	$phone.on('change', function (e) {
		const value = e.target.value;

		console.log(value);

		if(value.length < 14 ) {
			displayError($(this), "Número do celular inválido ");
		} else {
			displaySuccess($(this), "");
		}
	});

	$password.on('change', function (e) {
		const value = e.target.value;

		console.log(value);

		if(value.length < 6 ) {
			displayError($(this), "Senha deve conter... ");
		} else {
			displaySuccess($(this), "");
		}
	});

	$password_confirm.on('change', function (e) {
		const value = $(this).val();
		const valuePassword = $password.val();

		console.log(value === valuePassword);

		if(value === valuePassword ) {
			displaySuccess($(this), "");
		} else {
			displayError($(this), "Senhas não são iguais");
		}
	});

	$birthdate.on('change', function (e) {
		const value = $(this).val();

		if(validarData(value)) {
			displaySuccess($(this), "");
		} else {
			displayError($(this), "Data não está no formato correto");
		}
		
	});

	$email.on('change', function (e) {
		const value = e.target.value;

		console.log(value);

		if(emailValidation.test(value)) {
			displaySuccess($(this), "");
		} else {
			displayError($(this), "O Email não está no formato correto. ");
		}
	});

	function displayError($el, msg) {
		$el.removeClass('success');
		$el.addClass('error');
		$el.siblings('.msg').addClass('error').text(msg);
	}

	function displaySuccess($el, msg){
		$el.removeClass('error');
		$el.addClass('success');
		$el.siblings('.msg').text(msg);
	}

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

	function validarVariant(){

		var validate = false;

		$('.box-sizes button').each(function(i, el){

			if($(el).hasClass('selected')) {
				validate = true;
			}
		});	

		return validate;
	}

	function validarData(data) {
        // Ex: 10/01/1985
        var regex = "\\d{2}/\\d{2}/\\d{4}";
        var dtArray = data.split("/");

        if (dtArray == null)
            return false;

        // Checks for dd/mm/yyyy format.
        var dtDay= dtArray[0];
        var dtMonth = dtArray[1];
        var dtYear = dtArray[2];

        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay> 31)
            return false;
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
            return false;
        else if (dtMonth == 2)
        {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap))
                return false;
        }
        return true;
    }
    
	

})(jQuery);

