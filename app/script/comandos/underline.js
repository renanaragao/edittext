edittext = edittext || {};

edittext.Underline = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('underline', false, null);
		}
	}
}