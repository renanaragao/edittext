edittext = edittext || {};

edittext.colorPickerFactory = function(editor, callback){


	var picker = editor.getElementsByClassName('picker')[0];
	var pickerIndicador = editor.getElementsByClassName('picker-indicator')[0];

	var slider = editor.getElementsByClassName('slider')[0];
	var sliderIndicador = editor.getElementsByClassName('slider-indicator')[0];

	ColorPicker.fixIndicators(sliderIndicador, pickerIndicador);

	return ColorPicker(slider, picker, function(hex, hsv, rgb, pickerCoordinate, sliderCoordinate){

		ColorPicker.positionIndicators(sliderIndicador, pickerIndicador, sliderCoordinate, pickerCoordinate);

		callback(hex);

	});

}