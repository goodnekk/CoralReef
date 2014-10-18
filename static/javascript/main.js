require.config({
	shim: {
		'threejs' : {
			exports: 'threejs'
		},
		'ace': {
			exports: 'ace'
		},
		'csg': {
			exports: 'csg'
		}
	},
	paths: {
		threejs: 'include/three.min',
		ace: 'include/ace-builds/src-min-noconflict/ace',
		csg: 'include/csgjs/csg'
	}
});

require(['editor', 'scene', 'message'], function(editor, scene, message) {
	message.init();
	
	scene.init();
	editor.init();
	
	
});