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
  homme_qui_mange: {
    img: 'homme_qui_mange.png',
    text: [
      {
        user_talking: false,
        text: 'Je donnerais tout pour manger du bon poisson...'
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

// Fonction pour les clicks des dialogs
let data_id = ''
$('[data-dialog-id]').click(function () {
  data_id = $(this).attr('data-dialog-id')
  showDialog(dialogs[data_id])

  if(data_id == 'dame_blanche') {
    nextStep(data_id)
  }
});

// Fonction pour afficher et cacher les dialogues
let index_dialog = 0

const showDialog = (dialog) => {
  if(index_dialog == 0) {
    $('.dialog_container').fadeIn()
    $('.container').addClass('blur')
    $('.arrow').hide()
    $('#character').attr("src", "assets/images/dialogs/" + dialog.img)
  }

  if(dialog.text[index_dialog].user_talking) {
    $('#user').addClass('talking')
    $('#character').removeClass('talking')
  } else {
    $('#character').addClass('talking')
    $('#user').removeClass('talking')
  }

  typeAnimation(dialog.text[index_dialog].text)
}

const hideDialog = () => {
  $('.dialog_container').fadeOut()
  $('.container').removeClass('blur')
  showArrow() // Pour garder que celles qu'il faut
}

// Fonction pour passer à la prochaine phrase dans le dialogue
const nextDialog = () => {
  index_dialog++
  if(dialogs[data_id].text[index_dialog] == undefined) {
    index_dialog = 0
    hideDialog()
  } else {
    showDialog(dialogs[data_id])
  }
}