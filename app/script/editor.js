'use strict';

edittext = edittext || {};

edittext.Editor = function(editor) {

	var self = this, command;

	var buttons = [].slice.call(editor.querySelectorAll('.edittext-controles > button'));

	var iframe = editor.querySelectorAll('.edittext-input > iframe')[0];

	iframe.contentDocument.designMode = 'on';

	buttons.forEach(function(button) {

		command = button.getAttribute('data-command');

		self[command] = edittext.comandoFactory.criar(iframe, button.getAttribute('data-command'));

		button.addEventListener('click', self[command].executar, true);

	});

	self.controles = {
		colorPicker: edittext.colorPickerFactory(editor, self.foreColor.setColor)
	}

	self.getData = function() {
		return iframe.contentDocument.body.innerHTML;
	};

	self.setData = function(data) {
		iframe.contentDocument.body.innerHTML = data;
	};

}