'use strict';

var edittext = edittext || {};

edittext.criarEditor = function(editor) {

	var buttons = [].slice.call(editor.querySelectorAll('.edittext-controles > a'));

	var iframe = new Frame(editor.querySelectorAll('.edittext-input > iframe')[0]);

	buttons.forEach(function(button) {

		button.addEventListener('click', function() {
			iframe.bold();
			this.
		}, true);

	});

}

function Frame(iframe) {

	var self = this;
	var _iframe = iframe;

	var content = function() {

		_iframe.contentDocument.designMode = 'on';

		return _iframe.contentDocument;

	}();

	self.bold = function() {
		content.execCommand('bold', false, null);
	}

}