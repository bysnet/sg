
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("quantum-bg"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 20;
}
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  color: 0x00ffcc,
  size: 0.05,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

document.addEventListener("mousemove", (event) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  particles.rotation.y = mouseX * 0.1;
  particles.rotation.x = mouseY * 0.1;
});

function animate() {
  particles.rotation.z += 0.002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

const assistant = document.getElementById("ai-assistant");
assistant.addEventListener("click", () => {
  alert("Hi! How can I guide you?");
});
    