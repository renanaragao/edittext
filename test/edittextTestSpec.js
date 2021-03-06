describe('edittext - ', function(){
   
   var iframe, bodyIframe, editor;

   function setUpHTMLFixture() {
	return   ' 	<div style="width: 800px; height: 800px;">                                                                                                  '
			+' 		<div class="edittext" id="myEditor">                                                                                                    '
			+' 			<div class="edittext-controles">                                                                                                    '
			+' 		        <button type="button" data-bold title="Negrito"  class=""><span class="icon icon-icon-bold"></span></button>                    '
			+' 		        <button type="button" data-italico title="Itálico" class="ativo"><span class="icon icon-icon-italic"></span></button>           '
			+' 		        <button type="button" data-sublinhado title="Sublinhado" class=""><span class="icon icon-icon-underline"></span></button>       '
			+' 		        <button type="button" title="Tamanho da fonte" class=""><span class="icon icon-font-size"></span></button>                      '
			+' 		        <button type="button" title="Cor da fonte" class=""><span class="icon icon-color-picker"></span></button>                       '
			+' 		        <button type="button" title="Lista ordenada" class=""><span class="icon icon-icon-list-ordered"></span></button>                '
			+' 		        <button type="button" title="Lista não ordenada" class=""><span class="icon icon-icon-list-unordered"></span></button>          '
			+' 		        <button type="button" title="Adicionar link" class=""><span class="icon icon-icon-link"></span></button>                        '
			+' 		        <button type="button" title="Remover link" class=""><span class="icon icon-icon-unlink"></span></button>                        '
			+' 	    	</div>                                                                                                                              '
			+' 	    	<div class="edittext-input">                                                                                                        '
			+' 	    		<iframe></iframe>                                                                                                               '
			+' 	    	</div>                                                                                                                              '
			+' 		</div>                                                                                                                                  '
			+' 	</div>                                                                                                                                      '
			+'                                                                                                                                              '
			+' 	<script type="text/javascript" src="app/script/app.js"></script>                                                                            '
			+'                                                                                                                                              ';
       
    }

   beforeEach(function() {
   	editor = edittext;
   });


	it('Deve pegar texto do iframe', function(){
		var div = document.createElement("DIV");

		div.innerHTML = setUpHTMLFixture();

		iframe = $('.edittext > .edittext-input > iframe');

		bodyIframe = iframe.find('body');

		bodyIframe.innerText = 'Teste';

		var editores = div.querySelectorAll('.edittext');;

		var countEditores = editores.length;

		for (var i = 0; i < countEditores; i++) {

			idEditor = editores[i].getAttribute('id')

			if(idEditor){
				editor[idEditor] = editor.editor.criarEditor(editores[i]);
			}
		};

		expect('Teste', editor.myEditor.getData())
	})

})