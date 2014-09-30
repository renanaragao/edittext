(function(){
	var editores = document.querySelectorAll('.edittext');

	var countEditores = editores.length, idEditor;

	for (var i = 0; i < countEditores; i++) {

		idEditor = editores[0].getAttribute('id')

		if(idEditor){
			edittext[idEditor] = edittext.editor.criarEditor(editores[0]);
		}
	};

})();