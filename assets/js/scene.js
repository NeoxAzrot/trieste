// Variable pour changer de scènes
const scenes = [
  {
    x: 0,
    y: 0,
    scale: 1,
    arrowLeft: false
  },
  {
    x: -600,
    y: 200,
    scale: 2
  },
  {
    x: -1600,
    y: -1200,
    scale: 1.5,
    arrowRight: false
  }
]

// Fonction pour changer de scène
let sceneIndex

const moveToScene = (sceneIndex) => {
  gsap.timeline().to('.container', {
    duration: 3,
    x: scenes[sceneIndex].x,
    y: scenes[sceneIndex].y,
    scale: scenes[sceneIndex].scale
  })

  showArrow()
}

// Fonctions pour les flèches
const leftArrow = $('#previous')
const rightArrow = $('#next')

leftArrow.click(() => {
  if(sceneIndex != 0) sceneIndex--
  
  moveToScene(sceneIndex)
})

rightArrow.click(() => {
  if(sceneIndex != 2) sceneIndex++
  
  moveToScene(sceneIndex)
})

const showArrow = () => {
  if(scenes[sceneIndex].arrowLeft == false) {
    leftArrow.fadeOut()
  } else {
    leftArrow.fadeIn()
  }
  
  if(scenes[sceneIndex].arrowRight == false) {
    rightArrow.fadeOut()
  } else {
    rightArrow.fadeIn()
  }
}

// Fonction d'initialisation
const init = () => {
  $('.menu').fadeOut()
  $('.container').fadeIn()

  sceneIndex = 0
  moveToScene(sceneIndex)
}