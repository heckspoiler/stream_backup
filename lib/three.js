import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createSculptureWithGeometry } from 'shader-park-core';
import { spCode } from './sp-code.js';

// Global variable to control rendering
window.isThreeJsRenderingEnabled = true;

window.restartRendering = () => {
  if (!window.isThreeJsRenderingEnabled) {
    window.isThreeJsRenderingEnabled = true;
    requestAnimationFrame(render);
  }
};

const container = document.getElementById('three-container');

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 1.9;

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  transparent: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color(1, 1, 1), 0);
container.appendChild(renderer.domElement);

let clock = new THREE.Clock();
let state = {
  mouse: new THREE.Vector3(),
  currMouse: new THREE.Vector3(),
  pointerDown: 0.5,
  currPointerDown: 0.0,
  time: 0.0,
};

let geometry = new THREE.SphereGeometry(2, 32, 32);
let mesh = createSculptureWithGeometry(geometry, spCode(), () => ({
  time: state.time,
  pointerDown: state.pointerDown,
  mouse: state.mouse,
  _scale: 1.2,
}));

scene.add(mesh);

let resizeTimeout;
let onWindowResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, 250);
};

window.addEventListener('resize', onWindowResize);

window.addEventListener(
  'pointermove',
  (event) => {
    state.currMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    state.currMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  },
  false
);

window.addEventListener(
  'pointerdown',
  () => (state.currPointerDown = 1.0),
  false
);
window.addEventListener(
  'pointerup',
  () => (state.currPointerDown = 0.0),
  false
);

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.15;
controls.enableZoom = false;
controls.rotateSpeed = 0.9;

let render = () => {
  if (window.isThreeJsRenderingEnabled) {
    requestAnimationFrame(render);
    state.time += clock.getDelta();
    state.pointerDown = 0.1 * state.currPointerDown + 0.9 * state.pointerDown;
    state.mouse.lerp(state.currMouse, 0.05);
    controls.update();
    renderer.render(scene, camera);
  }
};

render();
