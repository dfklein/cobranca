$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event) { // captura o evento de abertura do modal
	var button = $(event.relatedTarget);
	var codigoTitulo = button.data('codigo'); // esse método vai recuperar a tag "data-codigo" do html
	var descricaoTitulo = button.data('descricao');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('url-base');
	
	if(!action.endsWith('/')) {
		action += '/';
	}
	
	form.attr('action', action + codigoTitulo);
	
	modal.find('.modal-body span').html('Tem certeza de que deseja excluir <strong>' + descricaoTitulo + '</strong>?');
	
//	O que este código faz é capturar o evento de abertura do modal. O botão de exclusão passa através
//	da tag "data-codigo" um parâmetro que, no caso, é o ID do registro que se quer excluir. Depois de
//	recuperadas estas informações, este código irá adicionar ao ACTION do FORM do modal um "/NUMERO DO ID"
//	e assim ele saberá o ID do registro que ele deve excluir.
	
});

$(function() {
	// Função que aciona o tooltip do bootstrap
	$('[rel="tooltip"]').tooltip(); // essa chave [ funciona como um tipo de if: recupera todos os "rel" que são iguais a "tooltip". O método tooltip() é o que ativa o componente
	$('.js-currency').maskMoney({decimal: ',', thousands: '.', allowZero: true});
	$('.js-atualizar-status').on('click', function(event) {
		event.preventDefault(); // isto faz com que ele não permita o comportamento padrão do href
		
		var botaoReceber = $(event.currentTarget);
		var urlReceber = botaoReceber.attr('href');
		
		console.log('urlReceber: ', urlReceber);
		
		var response = $.ajax({
			url: urlReceber,
			type: 'PUT'
		});
		
		response.done(function(e) { // este "e" recebe o retorno do método do java. Não entendi como isso funciona.
			var codigoTitulo = botaoReceber.data('codigo');
			$('[data-role=' + codigoTitulo + ']').html('<span class="label label-success">' + e + '</span>');
			botaoReceber.hide();
			
		});
		
		response.fail(function(e) {
			console.log(e);
			alert('Erro recebendo cobrança');
		});
		
		
	});
})