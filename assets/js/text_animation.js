// Les dialogues
const app = document.getElementById('app')

const typeAnimation = (text) => {
  const typewriter = new Typewriter(app, {
    delay: 60
  })

  typewriter
    .pauseFor(200)
    .typeString(text)
    .start()
    .callFunction(() => {
      stopSoundDialog()
    })
    .pauseFor(1500)
    .callFunction(() => {
      nextDialog()
    })
}