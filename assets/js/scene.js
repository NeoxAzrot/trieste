// Variable pour changer de scènes
const fresque = $('.fresque')

const chapitres = [
  {
    scenes: [
      {
        x: -519,
        y: -597,
        scale: 1.2,
        arrowLeft: false
      },
      {
        x: -1510,
        y: -620,
        scale: 1.6
      },
      {
        x: -2431,
        y: -813,
        scale: 1.3,
        arrowRight: false
      }
    ]
  },
  {
    scenes: [
      {
        x: -3285,
        y: -767,
        scale: 1.6
      },
      {
        x: -400,
        y: -1577,
        scale: 1.4
      },
      {
        x: -900,
        y: -926,
        scale: 1.6
      },
      {
        x: -1979,
        y: -1715,
        scale: 1.2
      },
      {
        x: -3079,
        y: -1627,
        scale: 1.2
      },
      {
        x: -1920,
        y: -1080,
        scale: 0.5,
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

  x += window.innerWidth / 2 //* scale
  y += window.innerHeight / 2 //* scale

  x = x / fresque[0].width * 100 + "%"
  y = y / fresque[0].height * 100 + "%"

  gsap.timeline().to('.container', {
    duration: 2,
    x: x,
    y: y,
    scale: scale
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