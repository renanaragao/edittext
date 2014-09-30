edittext = edittext || {};

edittext.Italic = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('italic', false, null);
		}
	}
}