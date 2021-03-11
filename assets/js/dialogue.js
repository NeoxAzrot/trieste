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
        text: 'Au revoir tout le monde, au revoir !! Je quitte à mon plus grand regret Bordeaux pour l’Angleterre. Mais joins toi à moi petit crabe, l’embarquement coûte trois pièces d’or !'
      },
      {
        user_talking: true,
        text: 'Je n\'ai pas un sou, il n\'y a pas d\'autres solutions que des pièces d\'or ?'
      },
      {
        user_talking: false,
        text: 'Non, désolée, je ne peux pas t’avancer et seul l’or a une valeur dans ce monde.'
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
        text: 'J\'ai moi aussi l\'acompte, je veux prendre le large.'
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
        text: 'Très bien ! Fais-moi voir ça.'
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
        text: 'Ah, vous parlez peut-être de votre cheval...'
      }
    ]
  },
  homme_porte_planche: {
    img: 'homme_porte_planche.png',
    text: [
      {
        user_talking: false,
        text: 'Que c\'est épuisant, vivement ce soir.'
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
        text: 'Je goûterais bien un peu de ce vin.'
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
        text: 'Bon voyage madame ! Faites attention à vous durant cette longue traversée !'
      },
      {
        user_talking: true,
        text: 'Excusez-moi madame, connaissez-vous un moyen d\'embarquer sans pièce d\'or ?'
      },
      {
        user_talking: false,
        text: 'C\'est impossible vieux crabe. Mais, les hommes seront bienveillants à ton égard si tu leur donnes un coup de pince.'
      },
      {
        user_talking: true,
        text: 'Merci bien. Je vais voir ce que je peux faire.'
      }
    ]
  },
  tableau4: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Larguez les amarres !!!'
      },
      {
        user_talking: true,
        text: 'Quelle aubaine ! Je vais enfin pouvoir m\'affranchir de mon destin en retrouvant ma liberté, mais pour l\'instant je me dois d\'être discret pour ne pas finir dans l\'assiette des marins.'
      }
    ]
  },
  tableau5: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Satané soleil il me brûle les yeux, vivement que j\'me sorte de là et que je retrouve ma petite bicoque sous la mer.'
      },
      {
        user_talking: true,
        text: 'Par contre, ça commence à me faire du mouron, j\'ai entendu quelques messes basses entre certains membres de l\'équipage et il semblerait qu\'une mutinerie se prépare...'
      }
    ]
  },
  tableau6: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'C\'était inévitable, cette mutinerie a surpris tout l\'équipage. Quelle bande de gougnafiers !'
      },
      {
        user_talking: true,
        text: 'Le navire a subi de nombreux dégâts...'
      },
      {
        user_talking: true,
        text: 'Sapristi le mât est en feu, JE SUIS CERNÉ !!! Il faut vite que je me sorte de là !'
      }
    ]
  },
  tableau7: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Oufff ! J\'ai réussi à me mettre à l\'abri dans une chaloupe à l\'arrière du bateau. Ce coup de tabac est en train d\'éradiquer tout l\'équipage !'
      },
      {
        user_talking: true,
        text: 'Le gouvernail et le mat se sont brisés. Il faut vite que je sorte de cette galère !!'
      },
      {
        user_talking: true,
        text: 'Oh, un satané goéland ! Il peut voler quelle chance. Il faut que je trouve une échappatoire...'
      }
    ]
  },
  tableau8: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Arghhh... le déluge est terminé ? Mais... où suis-je ? Serait-ce ?? Du sable ??? Mais ce n\'est pas possible ?'
      },
      {
        user_talking: true,
        text: 'J\'ai dû perdre la boule en mer lorsque j\'ai essayé de m\'évader... J\'aurais donc fini sur la côte à cause du courant ?'
      },
      {
        user_talking: true,
        text: 'Diantre ! Il y a des pêcheurs partout, je me dois d\'être furtif...'
      }
    ]
  },
  outro: {
    img: '',
    text: [
      {
        user_talking: true,
        text: 'Non ! Ne me pêchez pas ! Je ne suis pas comestible, je suis une vieille branche et ma carapace est dure comme pierre !'
      },
      {
        user_talking: true,
        text: 'Vous ne m\'aurez pas comme ça, croyez-le ou non !'
      },
      {
        user_talking: true,
        text: 'Jeune faquin !!'
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
    // On affiche l'image si il y en a une pour éviter les erreurs
    if(dialog.img) {
      $('#character').attr("src", "assets/images/dialogs/" + dialog.img)
    }
    $('.dialog_container').fadeIn()
    $('.container').addClass('blur')
    $('.arrow').hide()
    $('.info_container').hide()
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
  $('.info_container').fadeIn()

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

  // On met la flèche pour passer à l'histoire précédente dans le chapitre 2
  let actual_scene = chapitres[chapitreIndex].scenes[sceneIndex]
  if(!actual_scene.arrowLeft && chapitres[chapitreIndex].scenes[sceneIndex + 1] != undefined && sceneIndex != 0) {
    actual_scene.arrowLeft = true
    showArrow()
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