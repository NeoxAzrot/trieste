let nb_fish = 0
let nb_coins = 0

// Fonction pour activer les autres point and click
const nextStep = (id) => {
  if(id == "dame_blanche") {
    $('.interaction.after_dame').show()
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
}

// Fonction pour afficher les objets
const showObjects = () => {
  if(nb_coins == 1) {
    $('.piece1').fadeIn()
  } else if(nb_coins == 2) {
    $('.piece1').fadeOut()
    $('.piece2').fadeIn()
  } else if(nb_coins == 3) {
    $('.piece2').fadeOut()
    $('.piece3').fadeIn()
  }

  if(nb_fish == 1) {
    $('.fish').fadeIn()
  } else {
    $('.fish').fadeOut()
  }
}