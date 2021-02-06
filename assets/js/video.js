const videoPlayer = document.querySelector('#video') // Car ne fonctionne pas en jquery
const videoPlayerContainer = $('.video_container')

let playIntro = true
let playStart = false

const playVideo = (url = chapitres[chapitreIndex].scenes[sceneIndex].video) => {
  if(playIntro) {
    $('.loader').addClass('hide')
    // // Timeout pour être en accord avec la vidéo
    // setTimeout(() => {
    //   sound_menu.play() // Pour garder le même son au moment du lancement du menu
    // }, 2200)
  }

  if(playStart) {
    sound_menu.fade(1, 0, 1000)
    $('#close_video').hide()

    setTimeout(() => {
      sound_menu.stop()
      $('.menu').hide()
      $('.container').show()
    }, 1000)
  }

  videoPlayer.setAttribute('src', 'assets/videos/' + url)
  videoPlayerContainer.fadeIn()
  videoPlayer.play()
}

videoPlayer.addEventListener('ended', () => {
  videoPlayerContainer.fadeOut()

  // On le met avant pour ne pas l'exécuter directement après l'intro
  if(!playIntro && !playStart) {
    nextVideoScene()
  }
  
  if(playStart) {
    initScene()
    playStart = false
    setTimeout(() => {
      $('#close_video').show()
    }, 800)
  }

  // A la fin pour ne pas prendre en compte le changement de variable directement
  if(playIntro) {
    startMenu()
  }
})

$('#close_video').click(() => {
  videoPlayer.pause()
  videoPlayerContainer.fadeOut()

  if(playIntro) {
    startMenu()
  }

  if(!playIntro && !playStart) {
    nextVideoScene()
  }
})

// Fonction pour passer à la scène suivante dans le chapitre 2 avec les vidéos
const nextVideoScene = () => {
  // On met la flèche pour passer à l'histoire suivante
  let actual_scene = chapitres[chapitreIndex].scenes[sceneIndex]
  if(!actual_scene.arrowRight) {
    actual_scene.arrowRight = true
    showArrow()
  }
}