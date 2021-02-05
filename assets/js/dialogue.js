// Variable pour les dialogues
const dialogs = {
  parapluie: {
    img: 'homme_parapluie.png',
    text: [
      {
        user_talking: false,
        text: 'Dégage de la, laisse-moi tranquille !'
      },
      {
        user_talking: true,
        text: 'Faquin.'
      }
    ]
  },
  dame_blanche: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: false,
        text: 'Embarquement, embarquement, 3 pièces d’or seulement, départ dans 15 min.'
      },
      {
        user_talking: true,
        text: 'J’ai pas un sous, il n’y a pas d’autre solution que des pièces d’or ?'
      },
      {
        user_talking: false,
        text: 'Non pas de fesse-mathieu ici !'
      }
    ]
  },
  dame_blanche_success: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: false,
        text: 'Tu as de la monnaie, vieux crabe ?'
      },
      {
        user_talking: true,
        text: 'J’ai juste le compte, faites-moi embarquer !'
      }
    ]
  },
  dame_blanche_soldat: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: true,
        text: 'Moi aussi c’est bon j\'ai l\'acompte.'
      },
      {
        user_talking: false,
        text: 'Je ne compte que deux pièces.'
      },
      {
        user_talking: true,
        text: 'Diantre !!! Au voleur, au voleur ! Quel est le truand qui a encore frappé !'
      }
    ]
  },
  homme_qui_mange: {
    img: 'homme_qui_mange.png',
    text: [
      {
        user_talking: false,
        text: 'Je donnerais tout pour manger du bon poisson...'
      }
    ]
  },
  homme_qui_mange_success: {
    img: 'homme_qui_mange.png',
    text: [
      {
        user_talking: false,
        text: 'Je donnerais tout pour manger du bon poisson...'
      },
      {
        user_talking: true,
        text: 'Ne vous inquiétez pas monsieur, j\'ai tout ce qu\'il vous faut sur moi.'
      },
      {
        user_talking: false,
        text: 'Mais que c\'est aimable. Prennez donc une pièce d\'or !'
      },
      {
        user_talking: true,
        text: 'Merci, grâce à vous je vais bientôt pouvoir prendre le large.'
      }
    ]
  },
  tram: {
    img: 'tram.png',
    text: [
      {
        user_talking: false,
        text: 'Le tram est bloqué, aide-moi à le réparer !'
      },
      {
        user_talking: true,
        text: 'C\’est pas qu\'tu crois que j\'vais le faire, tout travail mérite salaire.'
      },
      {
        user_talking: false,
        text: 'Une pièce d’or ça te va ?'
      },
      {
        user_talking: true,
        text: 'Non deux !'
      },
      {
        user_talking: false,
        text: 'Sûrement pas, une ou rien !'
      },
      {
        user_talking: true,
        text: 'Bon fais-moi voir ça.'
      }
    ]
  },
  homme_poisson: {
    img: 'homme_poisson.png',
    text: [
      {
        user_talking: false,
        text: 'Un poisson contre une question !'
      },
      {
        user_talking: true,
        text: 'Très bien mon cher.'
      },
      {
        user_talking: false,
        text: 'La mer a parfois sa couleur,<br/>Et sa cote accueille les promeneurs.<br/>Qu’elle orne le doigt ou le cou,<br/>Pour une femme elle est bijou.<br/><br/><b>Qui est-elle ?</b>'
      }
    ]
  }
}

const sound_dialog = new Howl({
  src: ['assets/sounds/' + 'dialog.mp3'],
  loop: true,
  volume: 1
})

// Fonction pour les clicks des dialogs
let data_id = ''
$('[data-dialog-id]').click(function () {
  data_id = $(this).attr('data-dialog-id')

  // On check pour les spécificités
  checkDialogWithObject(data_id)
  showDialog(dialogs[data_id])
});

// Fonction pour vérifier les dialogs en fonction des objets
const checkDialogWithObject = (id) => {
  if(id == 'homme_qui_mange' && nb_fishs >= 1) {
    data_id = 'homme_qui_mange_success'
    nb_fishs--
    nb_coins++
    $('#homme_qui_mange').hide()
  }

  if(id == 'dame_blanche' && nb_coins >= 3) {
    data_id = 'dame_blanche_success'
    nb_coins -= 3
    $('#dame_blanche').hide()
  }
}

// Fonction pour afficher et cacher les dialogues
let index_dialog = 0

const showDialog = (dialog) => {
  if(index_dialog == 0) {
    $('#character').attr("src", "assets/images/dialogs/" + dialog.img)
    $('.dialog_container').fadeIn()
    $('.container').addClass('blur')
    $('.arrow').hide()
  }

  if(dialog.text[index_dialog].user_talking) {
    $('#user').addClass('talking')
    $('#character').removeClass('talking')
  } else {
    $('#character').addClass('talking')
    $('#user').removeClass('talking')
  }

  sound_dialog.play()
  typeAnimation(dialog.text[index_dialog].text)
}

const hideDialog = () => {
  $('#character').attr("src", "")
  $('.dialog_container').fadeOut()
  $('.container').removeClass('blur')
  showArrow() // Pour garder que celles qu'il faut
  showObjects() // Pour garder que celles qu'il faut
}

// Fonction pour passer à la prochaine phrase dans le dialogue
const nextDialog = () => {
  index_dialog++
  if(dialogs[data_id].text[index_dialog] == undefined) {
    index_dialog = 0
    hideDialog()

    // On effectu d'autres actions
    nextStep(data_id)
  } else {
    showDialog(dialogs[data_id])
  }
}

// Fonction pour arrêter le son du dialogue
const stopSoundDialog = () => {
  sound_dialog.stop()
}