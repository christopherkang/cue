init();
make_circuit("yes");
animate();
function init() {
    // 
    // we need to create a renderer 
    renderer = new THREE.WebGLRenderer();

    // set the size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add it to the body
    document.body.appendChild(renderer.domElement);

    // add the camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

    // create a scene
    scene = new THREE.Scene();

    // var light = new THREE.DirectionalLight(0xffffff);
    // scene.add(light);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    controls.update();
    // renderer.setClearColor(0xffffff, 0);

}
function animate() {

    requestAnimationFrame(animate);

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render(scene, camera);

}

function make_circuit(hamiltonian_data) {
    // hamiltonian_data is the json file

    // step 1 - add all the circuit points
    var geometry = new THREE.SphereGeometry(5, 32, 32);
    geometry.vertices.push(
        new THREE.Vector3( -10,  10, 0 ),
        new THREE.Vector3( -10, -10, 0 ),
        new THREE.Vector3(  10, -10, 0 )
    );
    var material = new THREE.MeshBasicMaterial( {color: 0x343deb} );
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // step 2 - add the vertical lines that go upwards

    // step 3 - iteratively add the gates
    // for (i = 0; i < length(hamiltonian_data["terms"]); i++) {
        // we need to extract term information

        // we need to draw a box on the indices of the qubits

        // 
    // }
}

