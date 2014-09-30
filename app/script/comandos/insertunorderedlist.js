edittext = edittext || {};

edittext.Insertunorderedlist = function(iframe){
	return {
		executar: function(){
			iframe.execCommand('insertunorderedlist', false, null);
		}
	}
}