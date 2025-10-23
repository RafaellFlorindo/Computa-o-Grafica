const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let baseSpeed = 0.01, mouseX = 0, mouseY = 0;

const speedSlider = document.body.appendChild(document.createElement('input'));
Object.assign(speedSlider, {
    type: 'range', min: 0, max: 100, value: 50,
    style: 'position:absolute; top:20px; left:20px;',
    oninput: (e) => { baseSpeed = (e.target.value / 50) * 0.01; }
});

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff }));
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 16), new THREE.MeshStandardMaterial({ color: 0x00ff00 }));
sphere.position.x = -2;
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.2, 16, 100), new THREE.MeshStandardMaterial({ color: 0xffff00 }));
torus.position.x = 2;

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 2, 3);
const ambientLight = new THREE.AmbientLight(0x404040, 0.9);

scene.add(cube, sphere, torus, directionalLight, ambientLight);

camera.position.set(0, 0, 7);

renderer.setAnimationLoop(() => {
    cube.rotation.x += baseSpeed;
    cube.rotation.y += baseSpeed;
    sphere.rotation.y += baseSpeed * 0.5;
    torus.rotation.x += baseSpeed * 2;

    camera.position.x = mouseX * 3;
    camera.position.y = mouseY * 3;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
});