'use strict';

edittext = edittext || {};

edittext.comandoFactory  = {
	criar: function(piframe, command){

		var iframe = piframe.contentDocument;

		if(command === 'bold') return new edittext.Comando(new edittext.Bold(iframe));

		if(command === 'italic') return new edittext.Comando(new edittext.Italic(iframe));

		if(command === 'underline') return new edittext.Comando(new edittext.Underline(iframe));

		if(command === 'fontSize') return new edittext.Comando(new edittext.FontSize(iframe));

		if(command === 'foreColor') return new edittext.Comando(new edittext.ForeColor(iframe));

		if(command === 'insertorderedlist') return new edittext.Comando(new edittext.Insertorderedlist(iframe));

		if(command === 'insertunorderedlist') return new edittext.Comando(new edittext.Insertunorderedlist(iframe));

		if(command === 'createLink') return new edittext.Comando(new edittext.CreateLink(iframe));

		if(command === 'unLink') return new edittext.Comando(new edittext.UnLink(iframe));

	}
};