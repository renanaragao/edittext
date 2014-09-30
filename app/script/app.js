(function(){
	var editores = document.querySelectorAll('.edittext');

	var countEditores = editores.length;

	for (var i = 0; i < countEditores; i++) {
		edittext.criarEditor(editores[0]);
	};

})();