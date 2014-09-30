'use strict';

var edittext = edittext || {};

edittext.editor = {
	criarEditor: function(editor) {

		var buttons = [].slice.call(editor.querySelectorAll('.edittext-controles > button'));

		var iframe = editor.querySelectorAll('.edittext-input > iframe')[0];

		iframe.contentDocument.designMode = 'on';

		buttons.forEach(function(button) {

			button.addEventListener('click', function() {
				iframe.contentDocument.execCommand(this.getAttribute('data-command'), false, null);
			}, true);

		});

		return {
			getData: function(){
				return iframe.contentDocument.body.innerHTML;
			},
			setData: function(data){
				iframe.contentDocument.body.innerHTML = data;
			}
		};
	}
};
