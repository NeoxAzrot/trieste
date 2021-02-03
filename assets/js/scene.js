// Variable pour changer de scènes
const fresque = $('.fresque')
const originalSize = {
  w: 3840,
  h: 2160
}

const chapitres = [
  {
    scenes: [
      {
        x: -540,
        y: -597,
        scale: 1.4,
        arrowLeft: false
      },
      {
        x: -1700,
        y: -720,
        scale: 2.1
      },
      {
        x: -2620,
        y: -800,
        scale: 1.5,
        arrowRight: false
      }
    ]
  },
  {
    scenes: [
      {
        x: -3680,
        y: -760,
        scale: 1.6,
        arrowLeft: false
      },
      {
        x: -500,
        y: -1550,
        scale: 1.4
      },
      {
        x: -1400,
        y: -1500,
        scale: 1.9
      },
      {
        x: -1650,
        y: -1600,
        scale: 1.3
      },
      {
        x: -2700,
        y: -1550,
        scale: 1.2
      },
      {
        x: -1150,
        y: -700,
        scale: 0.52,
        arrowRight: false
      }
    ]
  }
]

// Fonction pour changer de scène
let chapitreIndex
let sceneIndex

const moveToScene = (chapitreIndex, sceneIndex) => {
  let scale = chapitres[chapitreIndex].scenes[sceneIndex].scale

  let x = chapitres[chapitreIndex].scenes[sceneIndex].x 
  let y = chapitres[chapitreIndex].scenes[sceneIndex].y

  x /= originalSize.w
  y /= originalSize.h

  x = x * fresque[0].offsetWidth + window.innerWidth / 2
  y = y * fresque[0].offsetHeight + window.innerHeight / 2

  gsap.to('.container_transform', {
    duration: 2,
    x: x,
    y: y,
  })
  gsap.to('.container', {
    duration: 2,
    scale
  })
  showArrow()
}

// Fonctions pour les flèches
const leftArrow = $('#previous')
const rightArrow = $('#next')

leftArrow.click(() => {
  if(sceneIndex != 0) sceneIndex--
  
  moveToScene(chapitreIndex, sceneIndex)
})

rightArrow.click(() => {
  if(sceneIndex != 8) sceneIndex++
  
  moveToScene(chapitreIndex, sceneIndex)
})

const showArrow = () => {
  if(chapitres[chapitreIndex].scenes[sceneIndex].arrowLeft == false) {
    leftArrow.fadeOut()
  } else {
    leftArrow.fadeIn()
  }

  if(chapitres[chapitreIndex].scenes[sceneIndex].arrowRight == false) {
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
  chapitreIndex = 0
  moveToScene(chapitreIndex, sceneIndex)
}

init()