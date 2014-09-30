'use strict';

edittext = edittext || {};

edittext.Comando = function(comando) {

	if (!comando || !comando.executar) throw new Error('Informe o comando.');

	var _comando = comando;

	return function() {

		comando.executar();

	};

};