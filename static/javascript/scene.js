define(["threejs"], function(threejs){

	var container, scene, camera, renderer, projector;
	var width, height;
	var component;

	function init() {
		initTHREE();
		initScene();
		initLighting();
		//initObjects();
		render();
	}

	function initTHREE() {
		container = document.getElementById('sceneview');

		width = window.innerWidth-500;
		height = 700;

		scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0xE5E3D6, 2000, 9000);
		camera = new THREE.PerspectiveCamera( 45, width/height, 1, 9000 ); 	//camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.1, 1000 );
		camera.position.set(3,3,3);
		camera.lookAt( {x:0,y:0,z:0} );

		renderer = new THREE.WebGLRenderer({ antialias:true }); //renderer = new THREE.CanvasRenderer(); 
		renderer.setSize( width, height );
		renderer.shadowMapEnabled = true;
		renderer.shadowMapType = THREE.PCFSoftShadowMap;

		projector = new THREE.Projector();

		container.appendChild( renderer.domElement );
	}

	function initScene() {
		//add ground
		//var planegeometry = new THREE.PlaneGeometry(2000, 2000);
		var gridgeom = new THREE.PlaneGeometry(5,5,10,10);
		gridgeom.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
		var grid = new THREE.Mesh(gridgeom, new THREE.MeshPhongMaterial( { color: 0x000000, transparent: true, opacity: 0.1, wireframe: true , side: THREE.DoubleSide} ));
		scene.add(grid);
		
		var sgridgeom = new THREE.PlaneGeometry(5,5,50,50);
		sgridgeom.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
		var sgrid = new THREE.Mesh(sgridgeom, new THREE.MeshPhongMaterial( { color: 0x0000FF, transparent: true, opacity: 0.05, wireframe: true , side: THREE.DoubleSide} ));
		scene.add(sgrid);

		var cubegeom = new THREE.CubeGeometry(1,1,1);
		component = new THREE.Mesh(cubegeom, new THREE.MeshPhongMaterial( { color: 0x000000, wireframe: true , side: THREE.DoubleSide} ));
		scene.add(component);
	}

	function initLighting() {
		//lighting
		var directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.color.setHSL( 0.1, 1, 0.1 );
		directionalLight.position.set(0, 1000, 0);
		directionalLight.castShadow=true;
		directionalLight.shadowDarkness = 0.1;
		directionalLight.shadowMapWidth = 2048/1;
		directionalLight.shadowMapHeight = 2048/1;
		directionalLight.shadowCameraRight     =  2000;
		directionalLight.shadowCameraLeft     = -2000;
		directionalLight.shadowCameraTop      =  2000;
		directionalLight.shadowCameraBottom   = -2000;
		//directionalLight.shadowCameraVisible = true;
		scene.add(directionalLight);

		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
		hemiLight.color.setHSL( 0.1, 1, 1 );
		hemiLight.groundColor.setHSL( 0.095, 1, 1 );
		hemiLight.position.set( 0, 500, 0 );
		scene.add( hemiLight );
	}

	function render() {
		renderer.render(scene, camera);
		//requestAnimationFrame(render);
		window.setTimeout(render, 1000/15);
		component.rotation.y+=0.01;
	}

	function update(polygons) {
		var newGeometry = new THREE.Geometry();
		var vertcount = 0;
		for(var i in polygons) {
			for(var j in polygons[i].vertices) {
				var pos = polygons[i].vertices[j].pos;
				newGeometry.vertices.push(new THREE.Vector3(pos.x,pos.y,pos.z));
				vertcount+=1;
			}
			//console.log(vertcount);
			newGeometry.faces.push(new THREE.Face3(vertcount-1, vertcount-3, vertcount-2 ));
			if(polygons[i].vertices.length==4){
				newGeometry.faces.push(new THREE.Face3(vertcount-1, vertcount-4, vertcount-3 ));
			}
		}
		
		newGeometry.computeFaceNormals();
		//newGeometry.computeVertexNormals();

		scene.remove(component);
		component = new THREE.Mesh(newGeometry, new THREE.MeshPhongMaterial( { color: 0xEEEEEE} ) );
		scene.add(component);
		render();
	}

	return({
		init: init,
		update: update
	});

});