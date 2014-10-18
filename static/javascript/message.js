define([], function(){
	var box;

	function init(){
		box = document.getElementById('message');
	}
	
	function log(text){
		box.innerHTML = text;
	}

	return({
		init: init,
		log: log
	});

});