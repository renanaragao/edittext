(function(){
	var iframe = document.querySelectorAll('.edittext > .edittext-input > iframe')[0];
	iframe.contentDocument.designMode = 'on';

	if(iframe.contentWindow)
		iframe.contentWindow.document.designMode="on";

})();