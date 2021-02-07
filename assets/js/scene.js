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
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene4.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'tableau4.mp4',
        dialog: 'tableau4'
      },
      {
        x: -700,
        y: -1550,
        scale: 1.4,
        arrowLeft: false,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene5.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'tableau5.mp4',
        dialog: 'tableau5'
      },
      {
        x: -1400,
        y: -1280,
        scale: 1.9,
        arrowLeft: false,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene6.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'tableau6.mp4',
        dialog: 'tableau6'
      },
      {
        x: -1800,
        y: -1700,
        scale: 1.3,
        arrowLeft: false,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene7.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'tableau7.mp4',
        dialog: 'tableau7'
      },
      {
        x: -3000,
        y: -1750,
        scale: 1.2,
        arrowLeft: false,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'scene8.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'tableau8.mp4',
        dialog: 'tableau8'
      },
      {
        x: -1920,
        y: -1080,
        scale: 0.5,
        arrowLeft: false,
        arrowRight: false,
        sound: new Howl({
          src: ['assets/sounds/' + 'outro.mp3'],
          loop: true,
          volume: 1
        }),
        video: 'outro.mp4',
        dialog: 'outro'
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
  let dialog = chapitres[chapitreIndex].scenes[sceneIndex].dialog

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
  showInfo()
  changeInfoText() // Met le texte de base pour l'info bulle
  playSound(sound)

  // On show et hide les interactions de la scène actuelle uniquement
  showInteraction()

  if(dialog) {
    setTimeout(() => {
      data_id = dialog
      showDialog(dialogs[data_id])
    }, 2000)

    // On enlève le dialogue pour ne pas le rejouer si on revient sur la scène
    chapitres[chapitreIndex].scenes[sceneIndex].dialog = ''
  }
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

// Fonction pour arrêter la musique d'ambiance sur chaque scène
const stopSound = () => {
  let = sound = chapitres[chapitreIndex].scenes[sceneIndex].sound
  if(sound) {
    sound.fade(1, 0, 2000)

    setTimeout(() => {
      sound.pause()
    }, 2000);
  }
}

// Fonction pour afficher les interactions de la scène uniquement
const showInteraction = () => {
  $('.interaction').hide() // On cache tout
  $(`.interaction.scene${sceneIndex + 1}.chapitre${chapitreIndex + 1}`).show() // On affiche seulement ceux de la scène
  $('.interaction.done').hide() // On cache celles déjà faites

  if(!after_dame_done) {
    $('.interaction.after_dame').hide() // On cache celle après la dame blanche si on ne l'a pas encore activé
  }
}

// Fonction pour afficher l'aide en haut
const showInfo = () => {
  $('.info_container').fadeIn()
}

// Fonction d'initialisation
const initScene = () => {
  $('.menu').fadeOut()
  $('.container').fadeIn()

  sceneIndex = 0 // 0
  chapitreIndex = 0 // 0
  moveToScene(chapitreIndex, sceneIndex)
}

// Fonction pour relancer le jeu, on réinitialise les variables
const restart = () => {
  let arrayDialog = ['tableau4', 'tableau5', 'tableau6', 'tableau7', 'tableau8', 'outro']
  playStart = true
  playOutro = false
  after_dame_done = false
  nb_fishs = 0
  nb_coins = 0
  completed = false

  // On recache les flèches pour le chapitre 2
  for(let i = 0; i < chapitres[1].scenes.length; i++) {
    chapitres[1].scenes[i].arrowLeft = false
    chapitres[1].scenes[i].arrowRight = false

    chapitres[1].scenes[i].dialog = arrayDialog[i] // On réinitialise les dialogues
  }

  $('.done').removeClass('done')
  $('.game_container').removeClass('success')
  $('#fish_answer').val('')
  $('.right_answer').hide()
  $('#fish_answer').prop('disabled', false)

  randomPuzzle()
  
  stopSound()
  playVideo('start_play.mp4')

  $('.end_container').fadeOut()
}