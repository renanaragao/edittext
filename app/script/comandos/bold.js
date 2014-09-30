edittext = edittext || {};

edittext.Bold = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('bold', false, null);
		}
	}
}