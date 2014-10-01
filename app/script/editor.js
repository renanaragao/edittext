'use strict';

edittext = edittext || {};

edittext.Editor = function(editor) {

	var self = this, command;

	self.elment = editor;

	var buttons = [].slice.call(self.elment.querySelectorAll('.edittext-controles > button'));

	var iframe = self.elment.querySelectorAll('.edittext-input > iframe')[0];

	iframe.contentDocument.designMode = 'on';

	buttons.forEach(function(button) {

		command = button.getAttribute('data-command');

		self[command] = edittext.comandoFactory.criar(self ,iframe, command);

		button.addEventListener('click', function(){
			self[this.getAttribute('data-command')].executar();
		}, true);


	});

	self.controles = {
		editorColorPicker: { 
			colorPicker: edittext.colorPickerFactory(self.elment, self.foreColor.setColor),
			colorPickerElement: self.elment.getElementsByClassName('edittext-color-picker')[0]
		}
	}

	self.getData = function() {
		return iframe.contentDocument.body.innerHTML;
	};

	self.setData = function(data) {
		iframe.contentDocument.body.innerHTML = data;
	};

}