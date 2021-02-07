
$(document).ready(function(){
	$('#cpf').mask('000.000.000-00').trigger('input')
	$('#data').mask('00/00/0000').trigger('input')
	$('#tel').mask('(00) 00000-0000').trigger('input')
	$('#num').mask('0#').trigger('input')
	$('#cep').mask('00000-000').trigger('input');

	 $('.formulario').on('submit',function(e){
	 	e.preventDefault();

	 	let tnome = $(this).find('#nome').val();
	 	let tcpf = $(this).find('#cpf').val().replace("/", "").replace("/", "");
	 	let tdata = $(this).find('#data').val().replace(".", "").replace(".", "").replace("-", "");

	 	if(nome.lenght<6){
	 		//messageError();
	 	}else if(data!=8){

	 	}else if(cpf!=11){

	 	}
	 })

	 $('#nome').blur(function(){
	 	$(this).removeClass('error');
		$(this).parent().find('.error-name').remove();
	 	let nome =$(this).val();

	 	let regex = /[a-záàâãéèêíïóôõöúçñ']* [a-záàâãéèêíïóôõöúçñ']*/gmi;

	 	let valido = regex.test(nome);

	 	if(!valido){
	 		$(this).addClass('error');
			$(this).after('<div class="error-name" style="color: red;">Por favor, digite o nome completo.</div>');
			$(this).focus();
			$('.botaoCad').prop("disabled", true);
	 	}else{
	 		$('.botaoCad').prop("disabled",false);
	 	}
	 })
})




function messageError(erro){
}

function entrar() {
	window.location.href='principal.html';
}
function sair(){
	window.location.href='index.html';
}
function cadastro(){
	window.location.href='cadastro.html';
}


