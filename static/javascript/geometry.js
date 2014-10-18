define(['csg', 'scene', 'message'], function(csg, scene, message){

	

	function build(component) {
		//start build
		message.log("building...");
		var d = new Date();
		var start = d.getTime(); 

		var newGeometry;
		//for each element
		for(var i in component.geometry) {
			
			//get current primitive
			var current = primitive(component.geometry[i]);
			if(!current)
				return;

			//perform operation
			var operation = component.geometry[i].operation
			newGeometry = operate(operation, newGeometry, current);
			if(!newGeometry)
				return;
		}
		if (newGeometry){
			var polygons = newGeometry.toPolygons();
			scene.update(polygons);		
		} 


		//finish build
		var d = new Date();
		var finish = d.getTime();
		var time = ((finish-start));
		message.log("succesful build in "+ time +" ms");
	}

	function primitive(obj){
		if (obj.type=="cube"){
			return CSG.cube(obj.properties);
		} else if (obj.type=="cylinder"){
			return CSG.cylinder(obj.properties);
		}
		message.log("Unknown primitive: '"+ obj.type+"'. Try 'cube', 'cylinder' or 'sphere'");
	}

	function operate(operation, a, b){
		if (operation){
			if (operation=="sub")
				return a.subtract(b);
			if (operation=="add")
				return a.union(b);
			if (operation=="int")
				return a.intersect(b);

			message.log("Unknown operation: '"+operation+"'. Try 'sub', 'add' or 'int'");
		} else {
			if (a){
				message.log("Missing operation.");
			} else {
				return b;
			}
		}
	}

	return {
		build: build
	};
});