edittext = edittext || {};

edittext.FontSize = function(iframe){
	return {
		executar: function(){
			var size = prompt('Informe o tamanho da fonte (1-7):', '');
			iframe.execCommand('FontSize', false, size);
		}
	}
}