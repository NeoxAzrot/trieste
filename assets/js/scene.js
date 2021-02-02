// Variable pour changer de scènes
const scenes = [
  {
    x: 350,
    y: -200,
    scale: 1.5,
    arrowLeft: false
  },
  {
    x: -1000,
    y: -250,
    scale: 1.8
  },
  {
    x: -1900,
    y: -600,
    scale: 1.4
  },
  {
    x: -3700,
    y: -450,
    scale: 1.6
  },
  {
    x: 300,
    y: -1500,
    scale: 1.4
  },
  {
    x: -950,
    y: -1300,
    scale: 1.6
  },
  {
    x: -1100,
    y: -1500,
    scale: 1.2
  },
  {
    x: -2500,
    y: -1200,
    scale: 1.2
  },
  {
    x: -500,
    y: -300,
    scale: 0.5,
    arrowRight: false
  }
]

// Fonction pour changer de scène
let sceneIndex

const moveToScene = (sceneIndex) => {
  gsap.timeline().to('.container', {
    duration: 2,
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
  if(sceneIndex != 8) sceneIndex++
  
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