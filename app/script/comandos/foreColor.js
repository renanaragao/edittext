edittext = edittext || {};

edittext.ForeColor = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('foreColor', false, null);
		}
	}
}