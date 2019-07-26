
// we need to create a renderer 
var renderer = new THREE.WebGLRenderer({ alpha: true});

// set the size
renderer.setSize(window.innerWidth, window.innerHeight);

// add it to the body
document.body.appendChild(renderer.domElement);

// add the camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

// set the camera + where its looking at 


// create a scene
var scene = new THREE.Scene();

//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// create the geometry and the vertices 
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));

// create the lines and the material its made of
var line = new THREE.Line(geometry, material);

var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry2, material2);

var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 10, 10, 10 );
scene.add( light );

// add the line, render the scene
scene.add(cube);
scene.add(line);
// renderer.render(scene, camera);

var controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
controls.update();
renderer.setClearColor( 0xffffff, 0);
animate();

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
