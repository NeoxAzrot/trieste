// Variable pour les dialogues
const dialogs = {
  parapluie: {
    img: 'homme_parapluie.png',
    text: [
      {
        user_talking: false,
        text: 'Dégage de là, laisse-moi tranquille !'
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
        text: 'Embarquement, embarquement, 3 pièces d\'or seulement, départ dans 15 min.'
      },
      {
        user_talking: true,
        text: 'Je n\'ai pas un sou, il ny\' a pas d\'autres solutions que des pièces d\'or ?'
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
        text: 'J\'ai juste le compte, faites-moi embarquer !'
      }
    ]
  },
  dame_blanche_soldat: {
    img: 'dame_blanche.png',
    text: [
      {
        user_talking: true,
        text: 'J\'ai moi aussi l\'acompte, je veux prendre le large !'
      },
      {
        user_talking: false,
        text: 'Je ne compte que deux pièces d\'or.'
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
        text: 'Le tram est bloqué, aidez-moi à le réparer !'
      },
      {
        user_talking: true,
        text: 'Je peux te donner un coup de pince ! Seulement, tout travail mérite salaire.'
      },
      {
        user_talking: false,
        text: 'Une pièce d\'or ça te va ?'
      },
      {
        user_talking: true,
        text: 'Je travaillerais seulement pour deux pièces !'
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
        text: 'La mer a parfois sa couleur,<br/>Et sa côte accueille les promeneurs.<br/>Qu\'elle orne le doigt ou le cou,<br/>Pour une femme elle est bijou.<br/><br/><b>Qui est-elle ?</b>'
      }
    ]
  },
  carosse: {
    img: 'carosse.png',
    text: [
      {
        user_talking: false,
        text: 'Laissez passer, écartez-vous !!'
      }
    ]
  },
  chien: {
    img: 'chien.png',
    text: [
      {
        user_talking: false,
        text: 'Rrrrrrr... OUAAF !'
      },
      {
        user_talking: true,
        text: 'Clap clap !'
      }
    ]
  },
  homme_corde: {
    img: 'homme_corde.png',
    text: [
      {
        user_talking: false,
        text: 'TIREZ !!!!!'
      }
    ]
  },
  fouet_cheval: {
    img: 'fouet_cheval.png',
    text: [
      {
        user_talking: false,
        text: 'Avance sale canasson !!'
      },
      {
        user_talking: true,
        text: 'Ce n\'est pas une façon de parler à un vieux crabe !'
      },
      {
        user_talking: true,
        text: 'Ah, vous parlez peut-être à votre cheval...'
      }
    ]
  },
  homme_porte_planche: {
    img: 'homme_porte_planche.png',
    text: [
      {
        user_talking: false,
        text: 'Que c\'est épuisant, vivement ce soir !'
      }
    ]
  },
  chevaux: {
    img: 'chevaux.png',
    text: [
      {
        user_talking: false,
        text: 'Que fait un vieux crabe ici ?'
      },
      {
        user_talking: true,
        text: '...'
      }
    ]
  },
  nageur: {
    img: 'nageur.png',
    text: [
      {
        user_talking: false,
        text: 'Allez, plus que 100 mètres et j\'y suis.'
      }
    ]
  },
  homme_tonneau: {
    img: 'homme_tonneau.png',
    text: [
      {
        user_talking: false,
        text: 'Je goûterai bien un peu de ce vin.'
      }
    ]
  },
  homme_riche: {
    img: 'homme_riche.png',
    text: [
      {
        user_talking: false,
        text: 'Madame, est-il possible de vous demander votre main, vous êtes tellement gracieuse. Voulez-vous partir avec moi ?'
      }
    ]
  },
  femme_enfant: {
    img: 'femme_enfant.png',
    text: [
      {
        user_talking: false,
        text: 'Bon voyage à tous, on se revoit sur le nouveau continent !'
      },
      {
        user_talking: true,
        text: 'Excusez moi madame, connaissez-vous un moyen d\'embarquer sans pièce d\'or ?'
      },
      {
        user_talking: false,
        text: 'C\'est impossible vieux crabe. Mais, les hommes seront être bienveillants à ton égard si tu leur donnes un coup de pince.'
      },
      {
        user_talking: true,
        text: 'Merci bien. Je vais voir ce que je peux faire.'
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
    $('#homme_qui_mange').addClass('done')
  }

  if(id == 'dame_blanche' && nb_coins >= 3) {
    data_id = 'dame_blanche_success'
    nb_coins -= 3
    $('#dame_blanche').hide()
    $('#dame_blanche').addClass('done')
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
  $('.dialog_container').fadeOut()
  $('.container').removeClass('blur')
  showArrow() // Pour garder que celles qu'il faut
  showObjects() // Pour garder que celles qu'il faut

  // Pour éviter les glitchs on enlève l'image du character après la disparition du container de dialog
  // Pas pour la dame blanche car sinon elle disparait en plein dialogue
  if(data_id != 'dame_blanche_success') {
    setTimeout(() => {
      $('#character').attr("src", "")
    }, 500);
  }

  // On remet le crabe pour le chapitre 2
  if(data_id == "dame_blanche_soldat") {
    setTimeout(() => {
      $('#user').attr("src", "assets/images/dialogs/crabe.png")
    }, 1000);
  }
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