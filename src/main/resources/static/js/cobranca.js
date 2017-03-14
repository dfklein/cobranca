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
