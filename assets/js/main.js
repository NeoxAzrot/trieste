let nb_fishs = 0
let nb_coins = 0
let after_dame_done = false

// Fonction pour activer les autres point and click
const nextStep = (id) => {
  if(id == "dame_blanche") {
    // Pour ne pas glitch le jeu et refaire à l'infini les intéractions
    if(!after_dame_done) {
      $('.interaction.after_dame').show()
      after_dame_done = true
    }
  }

  // Pour l'homme poisson
  if(id == "homme_poisson") {
    $('.fish_question_container').addClass('show')

    const app = document.getElementById('question')
    const typewriter = new Typewriter(app, {
      delay: 75
    })

    typewriter
      .pauseFor(1000)
      .typeString('Qui est-elle ?')
      .start()
  }

  // Pour le tram
  if(id == "tram") {
    $('.puzzle_container').addClass('show')
  }

  // On fait le 2ème dialogue
  if(id == "dame_blanche_success") {
    let img = 'soldat.png'
    data_id = 'dame_blanche_soldat'
    $('#user').attr("src", "assets/images/dialogs/" + img)

    showDialog(dialogs[data_id])
  }

  // On passe à l'autre chapitre
  if(id == "dame_blanche_soldat") {
    chapitreIndex++
    sceneIndex = 0

    moveToScene(chapitreIndex, sceneIndex)
  }
}

// Pour le coffre du soldat car il n'y a pas de dialogue
$('#coffre_soldat').click(() => {
  $('.code_container').addClass('show')
})

// Fonction pour afficher les objets
const showObjects = () => {
  if(nb_coins == 1) {
    $('.coin1').show()
  } else if(nb_coins == 2) {
    $('.coin1').hide()
    $('.coin2').show()
  } else if(nb_coins == 3) {
    $('.coin2').hide()
    $('.coin3').show()
  } else {
    $('.coin1').hide()
    $('.coin2').hide()
    $('.coin3').hide()
  }

  if(nb_fishs == 1) {
    $('.fish').show()
  } else {
    $('.fish').hide()
  }
}