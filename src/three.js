import * as THREE from 'three';

// Helper functions
const visibleHeight = (depth, camera) => {
  const cameraOffset = camera.position.z;
  if (depth < cameraOffset) depth -= cameraOffset;
  else depth += cameraOffset;
  const vFOV = camera.fov * Math.PI / 180; 
  return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
};

const visibleWidth = (depth, camera) => {
  const height = visibleHeight(depth, camera);
  return height * camera.aspect;
};

// Constants
const PARTICLE_LIMIT = 300;
let NUM_PARTICLES = PARTICLE_LIMIT;
const DEPTH = 1000;
const RANGE = 650;
const EXTRA = 10;
const WHITE = new THREE.Color(0xffffff);
const BLACK = new THREE.Color(0x000000);

// Setup
const container = document.getElementById("three");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
camera.position.z = DEPTH;

// Build particles
const geometry = new THREE.CircleGeometry(6, 32);
const particles = [];
for (let i = 0; i < NUM_PARTICLES; i++) {
  const material = new THREE.MeshBasicMaterial({ color: WHITE, transparent: true });
  const particle = new THREE.Mesh(geometry, material);
  particle.position.z = Math.random() * RANGE;
  particle.position.x = Math.random() * visibleWidth(particle.position.z, camera) - visibleWidth(particle.position.z, camera) / 2;
  particle.position.y = Math.random() * visibleHeight(particle.position.z, camera) - visibleHeight(particle.position.z, camera) / 2;
  particle.scale.x = particle.scale.y = particle.scale.z = (Math.random() / 2) + .2;
  
  let opacity = (1 - particle.position.z / RANGE) / 2
  particle.material.opacity = opacity > .1 ? opacity : .1;

  // Add attributes
  particle.direction = [(Math.random() - .5) / 2, Math.random() / 4];
  particle.scaleDirection = (Math.random() - .5 > 0) ? 1 : -1;
  particle.scaleSpeed = Math.random() / 250;
  particle.visible = true

  scene.add(particle)
  particles.push(particle)
}

NUM_PARTICLES = setParticles();
toggleParticles();

// Event listeners + animation
window.addEventListener("resize", onResize);
renderer.setAnimationLoop(animate)

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Prevent lots of particles on mobile screens
  NUM_PARTICLES = setParticles();
  toggleParticles();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const particle = particles[i];

    // Movement code
    if (particle.position.x > -visibleWidth(particle.position.z, camera) / 2 - EXTRA &&
        particle.position.x < visibleWidth(particle.position.z, camera) / 2 + EXTRA &&
        particle.position.y > -visibleHeight(particle.position.z, camera) / 2 - EXTRA &&
        particle.position.y < visibleHeight(particle.position.z, camera) / 2 + EXTRA) {
      particle.position.x += particle.direction[0];
      particle.position.y += particle.direction[1];

      // Scaling
      particle.scale.z += particle.scaleSpeed * particle.scaleDirection;
      particle.scale.x += particle.scaleSpeed * particle.scaleDirection;
      particle.scale.y += particle.scaleSpeed * particle.scaleDirection;
      if (particle.scale.z > .7 || particle.scale.z < .2) {
        particle.scaleDirection *= -1;
      }
    } else {
      newPosition(particle);
    }
  }

  renderer.render(scene, camera);
}

function newPosition(particle) {
  const roll = Math.floor(Math.random() * 4);

  if (roll == 0) {
    particle.position.y = Math.random() * visibleHeight(particle.position.z, camera) - visibleHeight(particle.position.z, camera) / 2;
    particle.position.x = visibleWidth(particle.position.z, camera) / 2;
    particle.direction = [-Math.random() / 2, Math.random() / 4];
  } else if (roll == 1) {
    particle.position.y = Math.random() * visibleHeight(particle.position.z, camera) - visibleHeight(particle.position.z, camera) / 2;
    particle.position.x = -visibleWidth(particle.position.z, camera) / 2;
    particle.direction = [Math.random() / 2, Math.random() / 4];
  } else /* 50% odds */ {
    particle.position.y = -visibleHeight(particle.position.z, camera) / 2;
    particle.position.x = Math.random() * visibleWidth(particle.position.z, camera) - visibleWidth(particle.position.z, camera) / 2;
    particle.direction = [(Math.random() - .5) / 2, Math.random() / 4];
  }
}

function setParticles() {
  // Prevent lots of particles on smaller screens
  let count = PARTICLE_LIMIT;
  if (window.innerWidth < 625 /* Disable mobile */) {
    count = 0
  }
  else if (window.innerWidth / 5 < count) {
    count = window.innerWidth / 5 > 100 ? window.innerWidth / 5 : 100; 
  }
  return Math.floor(count);
}

function toggleParticles() {
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const particle = particles[i];
    particle.visible = true;
  }
  for (let j = NUM_PARTICLES; j < PARTICLE_LIMIT; j++) {
    const particle = particles[j];
    particle.visible = false;
  }
}

export function colorParticles() {
  for (let i = 0; i < PARTICLE_LIMIT; i++) {
    const material = particles[i].material;
    material.color.equals(WHITE) ? material.color.set(BLACK) : material.color.set(WHITE);
  }
}
