const videoPlayer = document.querySelector('#video') // Car ne fonctionne pas en jquery
const videoPlayerContainer = $('.video_container')
const videoPlayerButton = $('.start_video')

let playIntro = true

const playVideo = (url = chapitres[chapitreIndex].scenes[sceneIndex].video) => {
  if(playIntro) {
    sound_menu.fade(1, 0, 1000)
    $('#close_video').hide()

    setTimeout(() => {
      sound_menu.stop()
      $('.menu').hide()
      $('.container').show()
    }, 1000)
  } else {
    stopSound()
  }

  videoPlayer.setAttribute('src', 'assets/videos/' + url)
  videoPlayerContainer.fadeIn()
  videoPlayerButton.fadeOut()
  videoPlayer.play()
}

videoPlayer.addEventListener('ended', () => {
  videoPlayerContainer.fadeOut()
  
  if(playIntro) {
    initScene()
    playIntro = false
    setTimeout(() => {
      $('#close_video').show()
    }, 800);
  } else {
    playSound(chapitres[chapitreIndex].scenes[sceneIndex].sound)

    // Pour ne pas afficher le bouton à la première scène
    videoPlayerButton.fadeIn()
  }
})

$('#close_video').click(() => {
  videoPlayer.pause()

  videoPlayerContainer.fadeOut()
  videoPlayerButton.fadeIn()

  playSound(chapitres[chapitreIndex].scenes[sceneIndex].sound)
})