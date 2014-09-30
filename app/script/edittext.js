'use strict';

var edittext = edittext || {};

edittext.editor = {
	criarEditor: function(editor) {

		var buttons = [].slice.call(editor.querySelectorAll('.edittext-controles > button'));

		var iframe = editor.querySelectorAll('.edittext-input > iframe')[0];

		iframe.contentDocument.designMode = 'on';

		buttons.forEach(function(button) {

			button.addEventListener('click', edittext.comandoFactory.criar(iframe, button.getAttribute('data-command')), true);

		});
	}
};
