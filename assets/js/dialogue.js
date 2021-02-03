// Variable pour les dialogues
const dialogs = {
  parapluie: {
    img: 'homme_parapluie.png',
    text: [
      {
        user_talking: false,
        text: 'Dégage de la, laisse-moi tranquille'
      },
      {
        user_talking: true,
        text: 'Faquin.'
      }
    ]
  }
}

// Fonction pour les clicks des dialogs
let id
$('[data-dialog-id]').click(function () {
  id = $(this).attr('data-dialog-id')
  showDialog(dialogs[id])
});

// Fonction pour afficher les dialogues
let index_dialog = 0

const showDialog = (dialog) => {
  if(index_dialog == 0) {
    $('.dialog_container').fadeIn()
    $('#character').attr("src", "assets/images/dialogs/" + dialog.img);
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
}

// Fonction pour passer à la prochaine phrase dans le dialogue
const nextDialog = () => {
  index_dialog++
  if(dialogs[id].text[index_dialog] == undefined) {
    index_dialog = 0
    hideDialog()
  } else {
    showDialog(dialogs[id])
  }
}