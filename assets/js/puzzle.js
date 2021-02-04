const puzzles = $('.puzzle')

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
  
    if (rotation === 270) {
      rotation = 0
    } else {
      rotation += 90
    }
  
    this.setAttribute('data-rotation', rotation)
    this.style.transform = 'rotate(' + rotation + 'deg)'
  
    checkPuzzlePieces ()
  }
});

let completed = false
function checkPuzzlePieces () {
  completed = true
  let rotation = 0

  puzzles.each(function () {
    rotation = this.getAttribute('data-rotation')
    rotation = parseInt(rotation)
    if (rotation != 0) {
      completed = false
    }
  })

  if (completed) {
    $('.game_container').addClass('success')
    $('#tram').hide()

    setTimeout(() => {
      $('.puzzle_container').removeClass('show')
  
      nb_coins++
      showObjects()
    }, 2000)
  }
}

// Fermer le puzzle au clique sur la croix
$('#close_puzzle').click(() => {
  $('.puzzle_container').removeClass('show')
})