edittext = edittext || {};

edittext.ForeColor = function(iframe) {

	var _iframe = iframe;

	return {
		executar: function() {

			_iframe.execCommand('foreColor', false, hex);

		},
		setColor: function(hex){

			_iframe.execCommand('foreColor', false, hex);

		}
	}
}