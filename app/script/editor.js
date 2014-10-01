'use strict';

edittext.Editor = function(editor) {

	var self = this,
		command;

	self.elment = editor;

	self.elment.innerHTML = edittext.template();

	var buttons = [].slice.call(self.elment.querySelectorAll('.edittext-controles > button'));

	var iframe = self.elment.querySelectorAll('.edittext-input > iframe')[0];

	iframe.contentDocument.designMode = 'on';

	buttons.forEach(function(button) {

		command = button.getAttribute('data-command');

		self[command] = edittext.comandoFactory.criar(self, iframe, command);

		button.addEventListener('click', function() {
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

edittext.template = function() {

	var template = [];

	template.push('<div class="edittext-controles">                                                                                                                                 ')
	template.push('		        <button type="button" data-command="bold" title="Negrito" class=""><span class="icon icon-bold"></span></button>                                    ')
	template.push('		        <button type="button" data-command="italic" title="Itálico" ><span class="icon icon-italic"></span></button>                                        ')
	template.push('		        <button type="button" data-command="underline" title="Sublinhado" class=""><span class="icon icon-underline"></span></button>                       ')
	template.push('		        <button type="button" data-command="fontSize" title="Tamanho da fonte" class=""><span class="icon icon-font-size"></span></button>                  ')
	template.push('		        <button type="button" data-command="foreColor" title="Cor da fonte" class=""><span class="icon icon-color-picker"></span></button>                  ')
	template.push('		        <button type="button" data-command="insertorderedlist" title="Lista ordenada" class=""><span class="icon icon-list-ordered"></span></button>        ')
	template.push('		        <button type="button" data-command="insertunorderedlist" title="Lista não ordenada" class=""><span class="icon icon-list-unordered"></span></button>')
	template.push('		        <button type="button" data-command="createLink" title="Adicionar link" class=""><span class="icon icon-link"></span></button>                       ')
	template.push('		        <button type="button" data-command="unLink" title="Remover link" class=""><span class="icon icon-unlink"></span></button>                           ')
	template.push('		        <div class="edittext-color-picker">                                                                                                                 ')
	template.push('	        		<div class="picker-wrapper">                                                                                                                    ')
	template.push('			           <div class="picker"></div>                                                                                                                   ')
	template.push('			           <div class="picker-indicator"></div>                                                                                                         ')
	template.push('			        </div>                                                                                                                                          ')
	template.push('			        <div class="slider-wrapper">                                                                                                                    ')
	template.push('			           <div class="slider"></div>                                                                                                                   ')
	template.push('			           <div class="slider-indicator"></div>                                                                                                         ')
	template.push('			        </div>                                                                                                                                          ')
	template.push('			        <div class="edittext-color-picker-control">                                                                                                     ')
	template.push('			        	<button type="button" class="button-cancel-color-picker"><span class="icon icon-cancel"></span></button>                                    ')
	template.push('			        </div>                                                                                                                                          ')
	template.push('	        	</div>                                                                                                                                              ')
	template.push('	    	</div>                                                                                                                                                  ')
	template.push('	    	<div class="edittext-input">                                                                                                                            ')
	template.push('	    		<textarea name="" style="display:none;" id="" cols="30" rows="10"></textarea>                                                                       ')
	template.push('	    		<iframe></iframe>                                                                                                                                   ')
	template.push('	    	</div>                                                                                                                                                  ')


	return template.join('');

}