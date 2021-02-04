$('#fish_answer').on('input', () => {
  let answer = $('#fish_answer').val().toLowerCase().replace('é', 'e')
  
  if(answer == 'emeraude') {
    $('#fish_answer').prop('disabled', true)
    $('.right_answer').fadeIn()
    $('#homme_poisson').hide()

    setTimeout(() => {
      $('.fish_question_container').removeClass('show')
  
      nb_fishs++
      showObjects()
    }, 2000)
  }
});

$('#close_fish').click(() => {
  $('.fish_question_container').removeClass('show')
})