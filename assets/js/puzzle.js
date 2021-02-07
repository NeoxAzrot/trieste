const puzzles = $('.puzzle')

const sound_puzzle = new Howl({
  src: ['assets/sounds/' + 'puzzle.mp3'],
  volume: 1
})

puzzles.each(function () {
  const rotation = 90 * Math.round(Math.random() * 3)
  this.setAttribute('data-rotation', rotation)
  this.style.transform = 'rotate(' + rotation + 'deg)'
})

puzzles.on('click', function () {
  if(!completed) {
    let rotation = this.getAttribute('data-rotation')
    // Ici on transforme une chaîne de caractères en entier
    rotation = parseInt(rotation)
    rotation += 90
  
    this.setAttribute('data-rotation', rotation)
    this.style.transform = 'rotate(' + rotation + 'deg)'
  
    checkPuzzlePieces ()
    playSoundPuzzle()
  }
});

const playSoundPuzzle = () => {
  sound_puzzle.play()
}

let completed = false
function checkPuzzlePieces () {
  completed = true
  let rotation = 0

  puzzles.each(function () {
    rotation = this.getAttribute('data-rotation')
    rotation = parseInt(rotation)
    if (rotation % 360 != 0) {
      completed = false
    }
  })

  if (completed) {
    $('.game_container').addClass('success')
    $('#tram').hide()
    $('#tram').addClass('done')
    tool_clickable = false

    setTimeout(() => {
      $('.puzzle_container').removeClass('show')
      changeInfoText()
      tool_clickable = true
  
      nb_coins++
      showObjects()
    }, 2000)
  }
}

// Fermer le puzzle au clique sur la croix
$('#close_puzzle').click(() => {
  $('.puzzle_container').removeClass('show')
  changeInfoText()
})