
$(document).ready(function(){
	$('#cpf').mask('000.000.000-00').trigger('input')
	$('#data').mask('00/00/0000').trigger('input')
	$('#tel').mask('(00) 00000-0000').trigger('input')
	$('#num').mask('0#').trigger('input')
	$('#cep').mask('00000-000').trigger('input');	

	$('input').blur(function(){
		if($(this).val()==""){
			$(this).css({"border-color" : "#F00"})
		}
	});
	$('input').focus(function(){
		$(this).css({"border-color" : "#3d3d3d"})
	});

	$('#formSubmit').on('submit',function(e){	 	
	 	let count = 0;
	 	//verifico o nome	 	
	 	let nome = $('this').find('#nome').val();
	 	let regex = /[a-záàâãéèêíïóôõöúçñ']* [a-záàâãéèêíïóôõöúçñ']*/gmi;
	 	let valido = regex.test(nome);

	 	if(!valido){
	 		erroMini('nome','Digite o nome e sobrenome teste',1);
	 		e.preventDefault();	 			
	 	}else{
	 		erroMini('nome','Digite o nome e sobrenome teste',0)	 		
	 	}

	 	let tcpf = $(this).find('#cpf').val().replace("/", "").replace("/", "");
	 	let tdata = $(this).find('#data').val().replace(".", "").replace(".", "").replace("-", "");
	 	
	 	console.log(tcpf);
	 	console.log(tdata);
	 	if(tdata.length!=8){	 
	 		erroMini('data','data invalido',1);
	 		e.preventDefault();	 	 		
	 	}else{
	 		erroMini('data','data invalido',0);	 		
	 	}
	 	if(tcpf.length!=11){
	 		erroMini('cpf','cpf invalido',1)
	 		e.preventDefault();	 	 		
	 	}else{	 		
	 		erroMini('cpf','cpf invalido',0) 
	 	}	 	
	 });
})

function erroMini(idClasse,msg,ts){	
	$('#'+idClasse).removeClass('error');
	$('#'+idClasse).parent().find('.error-name').remove();
	if(ts==1){
		$('#'+idClasse).addClass('error');
		$('#'+idClasse).after(`<div class="error-name" style="color: red;">${msg}</div>`);
	}
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


