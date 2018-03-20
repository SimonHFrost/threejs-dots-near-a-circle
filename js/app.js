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

let count = 0

const createPoint = (x, y) => {
  // scale size by distance down page
  const size = 2 + ((15 + y) / 30) * 8

  // scale color by distance across page
  const red = (15 + x) / 30
  const color = new THREE.Color( red, 1, 0 );

  var dotGeometry = new THREE.Geometry();
  var dotMaterial = new THREE.PointsMaterial( {
    color: color,
    size: size,
    sizeAttenuation: false
  } );

  dotGeometry.vertices.push(new THREE.Vector3( x, y, 0));
  return dot = new THREE.Points( dotGeometry, dotMaterial );
}

setInterval(() => {
  if (count >= 1000) {
    console.log('finished')
    return
  }

  const randomX = 15 - Math.random() * 30
  const randomY = 15 - Math.random() * 30

  const distFromCenter = Math.sqrt(randomX * randomX + randomY * randomY)

  if (distFromCenter > 9 && distFromCenter < 11) {
    const point = createPoint(randomX, randomY)
    count++
    scene.add(point)
  }
}, 0.01)
