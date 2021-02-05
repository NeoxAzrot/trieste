const videoPlayer = document.querySelector('#video')
const videoPlayerContainer = document.querySelector('.video_container')

let playIntro = true

const playVideo = (url) => {
  if(playIntro) {
    sound_menu.fade(1, 0, 1000)

    setTimeout(() => {
      sound_menu.stop()
    }, 1000)
  }

  videoPlayer.setAttribute('src', 'assets/videos/' + url)
  videoPlayerContainer.style.zIndex = "9999"
  videoPlayerContainer.classList.add('show')
  videoPlayer.play()
}

videoPlayer.addEventListener('ended', () => {
  videoPlayerContainer.classList.remove('show')
  setTimeout(() => {
    videoPlayerContainer.style.zIndex = "-1"
  }, 800);
  
  if(playIntro) {
    initScene()
    playIntro = false
  }
})