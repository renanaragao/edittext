(function(){
	var editores = document.querySelectorAll('.edittext');

	var countEditores = editores.length, idEditor;

	for (var i = 0; i < countEditores; i++) {

		idEditor = editores[i].getAttribute('id')

		if(idEditor){
			edittext[idEditor] = edittext.editor.criarEditor(editores[i]);
		}
	};

})();