// Les dialogues
const app = document.getElementById('app');
const typewriter = new Typewriter(app, {
  delay: 75
})

// A changer
typewriter
  .pauseFor(500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start()