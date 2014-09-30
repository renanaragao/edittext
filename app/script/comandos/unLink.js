edittext = edittext || {};

edittext.UnLink = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('unLink', false, null);
		}
	}
}