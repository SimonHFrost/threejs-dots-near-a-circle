const THREE = require('three')

const initialize = require('./initializer.js').initialize
const createAmbientLight = require('./object-creator.js').createAmbientLight
const createDirectionalLight = require('./object-creator.js').createDirectionalLight
const createCube = require('./object-creator.js').createCube

const output = initialize()
const scene = output.scene

const centerX = 0
const centerY = 0

const radius = 10

scene.add(createAmbientLight())
scene.add(createDirectionalLight())

const createPoint = (x, y) => {
  var dotGeometry = new THREE.Geometry();
  dotGeometry.vertices.push(new THREE.Vector3( x, y, 0));
  var dotMaterial = new THREE.PointsMaterial( { size: 5, sizeAttenuation: false } );
  return dot = new THREE.Points( dotGeometry, dotMaterial );
}

setInterval(() => {
  const randomX = 15 - Math.random() * 30
  const randomY = 15 - Math.random() * 30

  const distFromCenter = Math.sqrt(randomX * randomX + randomY * randomY)

  if (distFromCenter > 9 && distFromCenter < 11) {
    const point = createPoint(randomX, randomY)
    scene.add(point)
  }
}, 10)
