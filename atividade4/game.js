const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    sphere.rotation.y += 0.005; 
    torus.rotation.x += 0.02;

    renderer.render(scene, camera);
}

animate();

camera.position.set(0, 0, 7);