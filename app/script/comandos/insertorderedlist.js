edittext = edittext || {};

edittext.Insertorderedlist = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('insertorderedlist', false, null);
		}
	}
}