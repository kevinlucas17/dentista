
$(document).ready(function(){
	$('#cpf').mask('000.000.000-00').trigger('input')
	$('#data').mask('00/00/0000').trigger('input')
	$('#tel').mask('(00) 00000-0000').trigger('input')
	$('#num').mask('0#')
	 $('#cep').mask('00000-000');
})


function entrar() {
	window.location.href='principal.html';
}
function sair(){
	window.location.href='index.html';
}
function cadastro(){
	window.location.href='cadastro.html';
}
