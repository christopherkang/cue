// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const THREE = require("three");
// OrbitControls = require("three-orbit-controls")(THREE);
// init();
// make_circuit("yes");
// animate();
// function init() {
//     //
//     // we need to create a renderer
//     renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     // set the size
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // add it to the body
//     document.body.appendChild(renderer.domElement);

//     // add the camera
//     camera = new THREE.PerspectiveCamera(
//         45,
//         window.innerWidth / window.innerHeight,
//         1,
//         500
//     );

//     // create a scene
//     scene = new THREE.Scene();
//     scene.add( new THREE.AxesHelper( 20 ) );

//     var light = new THREE.AmbientLight(0x404040);
//     scene.add(light);

//     var light = new THREE.PointLight( 0xff0000, 1, 100 );
//     light.position.set( 50, 50, 50 );
//     scene.add( light );

//     controls = new OrbitControls(camera, renderer.domElement);
//     camera.position.set(45, 45, 45);
//     camera.lookAt(0, 0, 0);
//     controls.update();
//     // renderer.setClearColor(0x000000, 0);
//     window.addEventListener( 'resize', onWindowResize, false );
// }

// function animate() {
//     requestAnimationFrame(animate);

//     // required if controls.enableDamping or controls.autoRotate are set to true
//     controls.update();

//     renderer.render(scene, camera);
// }

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );
// }

// function make_sphere(radius, color, position) {
//     // material.wireframe = true;
//     var geometry = new THREE.SphereGeometry(radius, 8, 8);
//     // { color: color}
//     var material = new THREE.MeshLambertMaterial();
//     material.light = true;
//     material.wireframe = true;
//     var sphere = new THREE.Mesh(geometry, material);
//     sphere.position.z = position;
//     scene.add(sphere);
// }

// function make_circuit(hamiltonian_data) {
//     // hamiltonian_data is the json file

//     // step 1 - add all the circuit points
//     for (i = 0; i < 5; i++){
//         make_sphere(1, 0x343deb, 30-10 * i);
//         var geometry = new THREE.Geometry();
//         geometry.vertices.push(new THREE.Vector3(0, 0, 30 - 10 * i));
//         geometry.vertices.push(new THREE.Vector3(0, 100, 30 - 10 * i));
//         var line = new THREE.Line(geometry, new THREE.LineBasicMaterial( {color: 0x000000, linewidth: 10, linecap: 'round'}));
//         scene.add(line);
//     }
    

//     // var geometry = new THREE.BufferGeometry();
//     // // create a simple square shape. We duplicate the top left and bottom right
//     // // vertices because each vertex needs to appear once per triangle.
//     // var vertices = new Float32Array( [
//     //     -1.0, -1.0,  1.0,
//     //     1.0, -1.0,  1.0,
//     //     1.0,  1.0,  1.0,

//     //     1.0,  1.0,  1.0,
//     //     -1.0,  1.0,  1.0,
//     //     -1.0, -1.0,  1.0
//     // ] );

//     // // itemSize = 3 because there are 3 values (components) per vertex
//     // geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
//     // var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
//     // var mesh = new THREE.Mesh( geometry, material );
//     // var sphere = new THREE.Mesh(geometry, material);
//     // scene.add(sphere)

//     // step 2 - add the vertical lines that go upwards

//     // step 3 - iteratively add the gates
//     // for (i = 0; i < length(hamiltonian_data["terms"]); i++) {
//     // we need to extract term information

//     // we need to draw a box on the indices of the qubits

//     //
//     // }
// }