edittext = edittext || {};

edittext.ForeColor = function(iframe, editor) {

	var _iframe = iframe;

	var _editor = editor;

	return {
		executar: function() {

			_editor.controles.editorColorPicker.colorPickerElement.style.display = 'block';

		},
		setColor: function(hex){

			_iframe.execCommand('ForeColor', false, hex);
			_editor.controles.editorColorPicker.colorPickerElement.style.display = 'none';

		}
	}
}