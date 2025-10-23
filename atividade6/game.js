const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let baseSpeed = 0.01;
let mouseX = 0;
let mouseY = 0;

const speedSlider = document.createElement('input');
speedSlider.type = 'range';
speedSlider.min = '0';
speedSlider.max = '200';
speedSlider.value = '50'; 
speedSlider.style.position = 'absolute';
speedSlider.style.top = '20px';
speedSlider.style.left = '20px';
document.body.appendChild(speedSlider);

speedSlider.addEventListener('input', (event) => {
    baseSpeed = (event.target.value / 100) * 0.02;
});

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});


const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xff }));
scene.add(cube);

const geometrySphere = new THREE.SphereGeometry(0.7, 32, 16);
const materialSphere = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.x = -2;
scene.add(sphere);

const geometryTorus = new THREE.TorusGeometry(0.8, 0.2, 16, 100);
const materialTorus = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.x = 2;
scene.add(torus);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += baseSpeed;
    cube.rotation.y += baseSpeed;

    sphere.rotation.y += baseSpeed * 0.5; 
    torus.rotation.x += baseSpeed * 2;  

    camera.position.x = mouseX * 3;
    camera.position.y = mouseY * 3;
    
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();

camera.position.set(0, 0, 7);