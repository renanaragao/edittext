edittext = edittext || {};

edittext.CreateLink = function(iframe){
	return {
		executar: function(){
			 var link = prompt('Insira um link url', 'http://');
			iframe.execCommand('createLink', false, link);
		}
	}
}