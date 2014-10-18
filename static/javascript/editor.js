define(['ace', 'message', 'geometry'], function(ace, message, geometry){

	var example = JSON.stringify({
	"geometry":[
		{
			"type":"cube",
			"properties": {
			    "radius":0.5,
			    "center":[0,0,0]
			}
		},
		{
		    "type": "cylinder",
		    "properties": {
		    	"slices":64,
		        "radius":0.2,
		        "start":[0,1,0],
		        "end":[0,-1,0]
		    },
		    "operation": "sub"
		},
		{
		    "type": "cylinder",
		    "properties": {
		    	"slices":64,
		        "radius":0.6,
		        "start":[1,0,0],
		        "end":[-1,0,0]
		    },
		    "operation": "int"
		}
	]
	}, null, "\t");

	function init(){
		var editor = ace.edit("editor");

		editor.getSession().setMode("ace/mode/json");

		

		//add event listner on change
		editor.getSession().on('change', function(e) {
			var text = editor.getSession().getValue();
			parse(text);
		});
		editor.getSession().setValue(example);

		//inital parse
		var text = editor.getSession().getValue();
		parse(text);
	}

	function parse(data){
		var component = null;
		try {
			component = JSON.parse(data);
			message.log('parsed');

		} catch(e){
			message.log('cant parse');
		}

		if (component){
			build(component);			
		}

		
	}

	function build(component) {
		geometry.build(component);
	}


	return {
		init:init
	};
});