import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene();

// Object
/* const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material) */

/* mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1 */
/* mesh.position.set(0.7, -0.6, 1) */

/* mesh.position.normalize() */

// Scale
/* mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5 */
/* mesh.scale.set(2, 0.5, 0.5) */

// Rotation
/* mesh.rotation.reorder('YXZ')
mesh.rotation.set(Math.PI / 4, Math.PI / 4, 0)

scene.add(mesh) */


// Objects with groups
const group = new THREE.Group()
group.position.y = -1
scene.add(group)

const cube1 =  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'red'}),
)
const cube2 =  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'green'}),
)
const cube3 =  new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'}),
)

cube2.position.x = -2
cube3.position.x = 2

group.add(cube1)
group.add(cube2)
group.add(cube3)


// Axes helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
/* camera.position.y = 1;
camera.position.x = 1; */

/* camera.lookAt(mesh.position) */
/* console.log(mesh.position.distanceTo(camera.position)) */

scene.add(camera);


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

