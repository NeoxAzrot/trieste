// Les dialogues
const app = document.getElementById('app')

const typeAnimation = (text) => {
  const typewriter = new Typewriter(app, {
    delay: 60
  })

  typewriter
    .pauseFor(500)
    .typeString(text)
    .start()
    .pauseFor(1500)
    .callFunction(() => {
      nextDialog()
    })
}