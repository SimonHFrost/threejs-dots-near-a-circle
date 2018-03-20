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

setInterval(() => {
  const randomX = 15 - Math.random() * 30
  const randomY = 15 - Math.random() * 30

  const distFromCenter = Math.sqrt(randomX * randomX + randomY * randomY)

  if (distFromCenter > 9 && distFromCenter < 11) {
    const cube = createCube()
    cube.position.x = randomX
    cube.position.y = randomY
    scene.add(cube)
  }
}, 50)
