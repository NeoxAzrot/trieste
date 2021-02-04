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
        x: -730,
        y: -600,
        scale: 1.4,
        arrowLeft: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene1.mp3'],
          loop: true,
          volume: 1
        })
      },
      {
        x: -1600,
        y: -720,
        scale: 2.1,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene2.mp3'],
          loop: true,
          volume: 1
        })
      },
      {
        x: -2500,
        y: -800,
        scale: 1.5,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene3.mp3'],
          loop: true,
          volume: 1
        })
      }
    ]
  },
  {
    scenes: [
      {
        x: -3230,
        y: -800,
        scale: 1.6,
        arrowLeft: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene4.mp3'],
          loop: true,
          volume: 1
        })
      },
      {
        x: -700,
        y: -1550,
        scale: 1.4,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene5.mp3'],
          loop: true,
          volume: 1
        })
      },
      {
        x: -1400,
        y: -1280,
        scale: 1.9,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene6.mp3'],
          loop: true,
          volume: 1
        })
      },
      {
        x: -1800,
        y: -1700,
        scale: 1.3
      },
      {
        x: -3000,
        y: -1750,
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
  let sound = chapitres[chapitreIndex].scenes[sceneIndex].sound

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
  playSound(sound)
}

// Fonctions pour les flèches
const leftArrow = $('#previous')
const rightArrow = $('#next')

leftArrow.click(() => {
  // On arrête le son avant de passer à l'autre scène pour ne pas en jouer à l'infini
  stopSound()

  if(sceneIndex != 0) sceneIndex-- // Nombre minimum d'oeuvre
  
  moveToScene(chapitreIndex, sceneIndex)
})

rightArrow.click(() => {
  // On arrête le son avant de passer à l'autre scène pour ne pas en jouer à l'infini
  stopSound()

  if(sceneIndex != chapitres[chapitreIndex].scenes.length) sceneIndex++ // Nombre maximum d'oeuvre de la scène
  
  moveToScene(chapitreIndex, sceneIndex)
})

// Fonction pour afficher ou pas les flèches
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

// Fonction pour jouer la musique d'ambiance sur chaque scène
const playSound = (sound) => {
  if(sound) {
    // Reprends le son où il en était
    sound.play()
    sound.fade(0, 1, 2000)
  }
}

// Fonction pour jouer la musique d'ambiance sur chaque scène
const stopSound = () => {
  let = sound = chapitres[chapitreIndex].scenes[sceneIndex].sound
  if(sound) {
    sound.fade(1, 0, 2000)

    setTimeout(() => {
      sound.pause()
    }, 2000);
  }
}

// Fonction d'initialisation
const initScene = () => {
  $('.menu').fadeOut()
  $('.container').fadeIn()

  sceneIndex = 0
  chapitreIndex = 0
  moveToScene(chapitreIndex, sceneIndex)
}
